"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface Template {
  id: number;
  title: string;
  description: string;
  image: string;
}

const PreviewContent: React.FC<{ template: Template }> = ({ template }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-[500px] flex justify-center">
      <div className="relative w-[400px] h-full">
        {loading ? (
          <div className="w-full h-full bg-gray-300 animate-pulse rounded-lg" />
        ) : (
          <Image
            src={template.image}
            alt={template.title}
            className="rounded-lg shadow-lg object-contain"
            layout="fill"
            onLoad={() => setLoading(false)}
          />
        )}
      </div>
    </div>
  );
};

export default PreviewContent;
