"use client";
import React, { useState, useRef, forwardRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import DrawingCanvas from "@/components/imagegen/sketchpad/DrawingCanvas";
import axios from "axios";

interface SketchPadProps {
  onSubmit: (imageUrl?: string) => void; // Callback function to handle submission
  setReferenceImageUrl: (url: string) => void;
}

const SketchPad = forwardRef<HTMLCanvasElement, SketchPadProps>(
  ({ onSubmit, setReferenceImageUrl }, ref) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    // Handle the submission of the drawing
    const handleSubmit = () => {
      if (canvasRef.current) {
        const originalCanvas = canvasRef.current;
        const originalContext = originalCanvas.getContext("2d");

        if (originalContext) {
          // Create a new canvas with the same dimensions
          const tempCanvas = document.createElement("canvas");
          tempCanvas.width = originalCanvas.width;
          tempCanvas.height = originalCanvas.height;
          const tempContext = tempCanvas.getContext("2d");

          if (tempContext) {
            // Fill the new canvas with a white background
            tempContext.fillStyle = "#ffffff"; // White color
            tempContext.fillRect(0, 0, tempCanvas.width, tempCanvas.height);

            // Draw the original canvas content on top of the white background
            tempContext.drawImage(originalCanvas, 0, 0);

            // Convert the new canvas to a blob and upload it
            tempCanvas.toBlob(async (blob) => {
              if (blob) {
                const data = new FormData();
                data.append("file", blob, "drawing.png");
                data.append("upload_preset", "studio-upload");
                const res = await axios.post(
                  "https://api.cloudinary.com/v1_1/arttribute/upload",
                  data
                );
                console.log("Uploaded image data:", res.data);
                const imageUrl = res.data.secure_url;
                setReferenceImageUrl(imageUrl); // Set the uploaded image URL
                onSubmit(imageUrl); // Pass the image data to the callback
              }
            }, "image/png");
          }
        }
      }
    };

    return (
      <div className="h-96 w-96 m-2">
        <DrawingCanvas ref={canvasRef} />
        <div className="w-full mt-20">
          <Button className="w-full mt-3 bg-purple-600" onClick={handleSubmit}>
            Submit Drawing
          </Button>
        </div>
      </div>
    );
  }
);

SketchPad.displayName = "SketchPad";

export default SketchPad;
