"use client";
import React from "react";
import { FaChevronRight } from "react-icons/fa6";

interface SubmitButtonProps {
  variant?: "black" | "white";
  text?: string;
  icon?: boolean;
  loading?: boolean;
  disabled?: boolean;
}

const SubmitButton = ({
  variant = "black",
  text = "Submit",
  icon = true,
  loading = false,
  disabled = false,
}: SubmitButtonProps) => {
  const buttonStyles =
    variant === "black"
      ? "text-white bg-black border-[1px] border-black"
      : "text-black bg-white border-[1px] border-white";

  return (
    <button
      type="submit"
      disabled={disabled || loading}
      className={`rounded-full text-md flex items-center justify-center px-5 py-2 ${buttonStyles} cursor-pointer transition-opacity disabled:opacity-60 disabled:cursor-not-allowed`}
    >
      {loading ? "Sending…" : text}
      {icon && !loading && <FaChevronRight className="ml-2 h-3 w-3" />}
    </button>
  );
};

export default SubmitButton;
