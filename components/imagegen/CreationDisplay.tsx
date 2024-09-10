import Image from "next/image";
import { cn } from "@/lib/utils";

import { Loader2, ImageIcon } from "lucide-react";

export default function CreationDisplay({
  loadingImages,
  loadedImages,
  generatedImages,
}: {
  loadingImages: boolean;
  loadedImages: boolean;
  generatedImages: Array<string>;
}) {
  return (
    <>
      <div>
        {loadedImages ? (
          <div className="p-0.5 w-96 h-96 border rounded-lg m-2">
            <div
              className={`grid ${
                generatedImages?.length === 1 ? "grid-cols-1" : "grid-cols-2"
              }`}
            >
              <div className="overflow-hidden rounded ">
                <div>
                  <Image
                    src={generatedImages[0]}
                    alt="generated image"
                    width={
                      generatedImages?.length === 1
                        ? 500
                        : generatedImages?.length === 2
                        ? 426
                        : 278
                    }
                    height={
                      generatedImages.length === 1
                        ? 500
                        : generatedImages.length === 2
                        ? 370
                        : 180
                    }
                    className={cn(
                      "object-cover transition-all hover:scale-105 rounded-lg ",
                      `${
                        generatedImages.length === 1
                          ? "aspect-[14/14] lg:aspect-[14/14] rounded-lg"
                          : generatedImages.length === 2
                          ? "aspect-[14/14] rounded-lg m-0.5"
                          : "aspect-[14/14] rounded-lg"
                      }`
                    )}
                  />
                </div>
              </div>
            </div>
          </div>
        ) : loadingImages ? (
          <div className="p-0 border border-neutral-300 bg-gradient-to-r from-pink-300 via-purple-300 to-pink-300 rounded-lg m-2 w-96 h-96  ">
            <div className="animate-pulse rounded-lg w-96 h-96  p-6  bg-slate-50 ">
              <div className="flex items-center justify-center h-full">
                <Loader2 className="h-6 w-6 animate-spin text-gray-500 mb-4" />
              </div>
            </div>
          </div>
        ) : (
          <div className="p-0.5 border border-neutral-300 to-pink-500 rounded-lg m-2 w-96 h-96 ">
            <div className="rounded-lg w-full h-full  lg:p-40 bg-slate-50 ">
              <div className="p-1"></div>
              <div className="hidden lg:flex items-center justify-center">
                <ImageIcon className="h-12 w-12" />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
