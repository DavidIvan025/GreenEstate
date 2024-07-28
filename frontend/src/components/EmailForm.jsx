import React from "react";
import Button from "./ui/Button";

export default function EmailForm({ confirmText }) {
  return (
    <form>
      <div className="relative mr-8 flex flex-col items-center md:flex-row">
        <input
          className="min-h-16 min-w-full rounded-full py-2 pl-6 md:min-w-[24rem]"
          type="email"
          name="email"
          maxLength="256"
          placeholder="Enter your email"
          required
        ></input>
        <Button
          className="left-64 mt-3 min-w-full md:absolute md:mt-0 md:min-w-fit"
          type="submit"
          data-wait="Please wait..."
        >
          Get Started
        </Button>
      </div>
      {confirmText && (
        <p className="py-3 text-fs-xs">
          By clicking Sign Up you're confirming that you agree with our Terms
          and Conditions.
        </p>
      )}
    </form>
  );
}
