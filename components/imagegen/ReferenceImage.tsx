import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";

import { ImageIcon, Loader2 } from "lucide-react";

export default function ReferenceImage({
  imageUrl,
  setImageUrl,
}: {
  imageUrl: string;
  setImageUrl: any;
}) {
  const [loading, setLoading] = useState(false);

  const handleUpload = async (e: any) => {
    const file = e.target.files[0];
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "studio-upload");

    setLoading(true);
    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/arttribute/upload",
      data
    );
    const uploadedFile = res.data;
    setImageUrl(uploadedFile.secure_url); // Set the uploaded image URL
    setLoading(false);
  };

  return (
    <>
      <div className="rounded-md p-2 h-96 w-96">
        <input
          type="file"
          name="file"
          id="file"
          className="hidden"
          onChange={handleUpload}
        />
        {imageUrl ? (
          <div className="flex justify-center mb-2 w-full h-full">
            <Image
              src={imageUrl}
              alt="Uploaded Image"
              width={400}
              height={400}
              className="object-cover transition-all aspect-[1/1] rounded-lg hover:scale-105"
            />
          </div>
        ) : (
          <label htmlFor="file" className="cursor-pointer w-full h-full">
            <div className="flex items-center justify-center mb-2 w-full h-full p-12 border rounded-lg text-slate-500">
              {loading ? (
                <div className="animate-spin">
                  <Loader2 className="h-6 w-6" />
                </div>
              ) : (
                <div className="flex items-center justify-center">
                  <ImageIcon className="h-6 w-6" />
                  <p className="ml-2">Upload Image</p>
                </div>
              )}
            </div>
          </label>
        )}
      </div>
    </>
  );
}
