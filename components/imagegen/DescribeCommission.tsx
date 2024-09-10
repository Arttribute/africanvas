"use client";
import { cn } from "@/lib/utils";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import CreationDisplay from "@/components/imagegen/CreationDisplay";
import SketchPad from "@/components/imagegen/sketchpad/SketchPad";
import ReferenceImage from "./ReferenceImage";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import axios from "axios";

export default function DescribeCommission() {
  const [generatedImages, setGeneratedImages] = useState<Array<string>>([]);
  const [loadingImages, setLoadingImages] = useState(false);
  const [loadedImages, setLoadedImages] = useState(false);
  const [promptId, setPromptId] = useState("");
  const [description, setDescription] = useState("");
  const [inputType, setInputType] = useState("reference");
  const [referenceImageUrl, setReferenceImageUrl] = useState("");
  const [desiredPrice, setDesiredPrice] = useState(500);

  async function generateImage(imageUrl?: string) {
    console.log("image prompt", description);

    try {
      setLoadingImages(true);
      let promptToken = "sks style"; //TODO: replace with this `${tunedModel.modeldata.token} style` || "sks style";
      console.log("imageUrl", imageUrl);
      const referenceImage = imageUrl || referenceImageUrl;
      const controlnetData =
        referenceImage !== ""
          ? {
              input_image_url: referenceImage,
              controlnet: "depth",
              denoising_strength: 1,
              controlnet_txt2img: false,
            }
          : {};

      const textToImageObject = {
        text: `${description}`,
        negative_prompt: "ugly ",
        super_resolution: true,
        face_correct: true,
        num_images: 1,
        callback: 0,
        ...controlnetData,
      };

      const res = await axios.post(`/api/generate/image`, {
        textToImageObject,
        modelId: "690204",
      });
      const PromptResponse = res.data;
      setPromptId(PromptResponse.id);
      console.log("Prompt Response", PromptResponse);
    } catch (error) {
      console.error("Error in API call:", error);
    }
  }

  async function getGeneratedImages() {
    try {
      const res = await axios.get(`/api/generate/image`, {
        params: {
          prompt_id: promptId,
          model_id: "690204",
        },
      });
      const data = res.data.data;
      if (data.images.length === 0) {
        getGeneratedImages();
      } else {
        setGeneratedImages(data.images);
        setLoadingImages(false);
        setLoadedImages(true);
      }
    } catch (error) {
      console.error("Error in API call:", error);
    }
  }

  useEffect(() => {
    if (promptId) {
      getGeneratedImages();
    }
  }, [promptId]);

  return (
    <div className="flex mt-16 items-center justify-center">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-4 m-4">
          <div className="m-2">
            <Button
              className={`${
                inputType === "prompt"
                  ? "bg-slate-200 text-slate-800"
                  : "bg-slate-800 text-white"
              } px-8 mx-1`}
              onClick={() => setInputType("prompt")}
            >
              Prompt
            </Button>
            <Button
              className={`${
                inputType === "reference"
                  ? "bg-slate-200 text-slate-800"
                  : "bg-slate-800 text-white"
              } px-6 mx-1`}
              onClick={() => setInputType("reference")}
            >
              Reference
            </Button>
            <Button
              className={`${
                inputType === "sketchpad"
                  ? "bg-slate-200 text-slate-800"
                  : "bg-slate-800 text-white"
              } px-6 mx-1`}
              onClick={() => setInputType("sketchpad")}
            >
              Sketchpad
            </Button>
          </div>

          {inputType === "prompt" || loadingImages || loadedImages ? (
            <CreationDisplay
              loadingImages={loadingImages}
              loadedImages={loadedImages}
              generatedImages={generatedImages}
            />
          ) : null}
          {inputType === "sketchpad" && !loadingImages && !loadedImages && (
            <SketchPad
              setReferenceImageUrl={setReferenceImageUrl}
              onSubmit={generateImage}
            />
          )}
          {inputType === "reference" && !loadingImages && !loadedImages && (
            <ReferenceImage
              imageUrl={referenceImageUrl}
              setImageUrl={setReferenceImageUrl}
            />
          )}

          {inputType !== "sketchpad" && !loadingImages && !loadedImages && (
            <div className="flex flex-col justify-center w-96 m-2">
              <Button
                className="w-full mt-3 bg-purple-600"
                onClick={() => generateImage()}
              >
                Visualize Description
              </Button>
            </div>
          )}
        </div>
        <div className="col-span-6 m-4">
          <div className="flex items-center">
            <Image
              src="/assets/Frame1.png"
              alt="Art Lover"
              width={150}
              height={150}
              className="rounded-full aspect-[1/1] m-2"
            />
            <div className="ml-4 w-96">
              <p className="text-4xl font-bold text-white">Artist Name</p>
              <p className="text-sm text-gray-400">very brief artist bio</p>
            </div>
          </div>
          <p className="text-sm text-gray-400 mt-2 mb-2">
            Describe your commission in detail. The more detailed the
            description, the better.
          </p>
          <Textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            className="w-full "
          />
          <p className="text-sm text-gray-400 mt-2 mb-2">
            Set the amount you are willing to pay for the commission.
          </p>
          <div className="fjustify-center my-2 bg-purple-300 p-4 rounded-2xl">
            <div className="flex justify-between">
              <p className="text-sm font-bold text-purple-800">500$</p>
              <p className="text-sm font-bold text-purple-800">1000$</p>
            </div>
            <Slider
              defaultValue={[50]}
              max={100}
              step={1}
              className={cn(" bg-blue-200")}
            />
          </div>
          <Button className="w-34 mt-3 bg-purple-600">
            Submit Commission
          </Button>

        </div>
      </div>
    </div>
  );
}
