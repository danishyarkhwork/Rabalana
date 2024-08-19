"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "@/context/AuthContext"; // Use your Auth context
import PreviewContent from "./PreviewContent";

const PreviewPageClient = ({ template }: { template: any }) => {
  const router = useRouter();
  const { isAuthenticated, loading } = useAuth();

  const handleCustomizeClick = () => {
    if (loading) return; // Prevent action if still loading auth status
    if (isAuthenticated) {
      router.push(`/customize/${template?.id}`);
    } else {
      router.push(`/auth/login?redirect=/customize/${template?.id}`);
    }
  };

  return (
    <div className="md:w-4/12 lg:w-4/12 sm:w-full">
      <div className="flex flex-col space-y-4">
        <div>
          <h1 className="text-3xl font-bold">{template.title}</h1>
          <p className="text-gray-600 mt-">{template.description}</p>
          <p className="text-sm text-gray-500 mt-2">Size: 5”x7”</p>
        </div>

        <button
          onClick={handleCustomizeClick}
          className="w-full py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
          disabled={loading} // Disable button if loading
        >
          {loading ? "Checking..." : "Customize"}
        </button>

        <div className="border p-4 rounded-lg space-y-2">
          {/* Share/download buttons */}
        </div>
      </div>
    </div>
  );
};

export default PreviewPageClient;
