"use client";

import { useRouter } from "next/navigation";

interface BackButtonProps {
  fallbackHref?: string;
  label?: string;
}

export default function BackButton({
  fallbackHref = "/services",
  label = "Back",
}: BackButtonProps) {
  const router = useRouter();

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push(fallbackHref);
    }
  };

  return (
    <button
      onClick={handleBack}
      className="mb-8 inline-flex items-center gap-2 rounded-md  px-4 py-2 text-sm font-medium text-white bg-[#e7000b] hover:bg-red-700 transition"
    >
      ← {label}
    </button>
  );
}
