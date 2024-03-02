"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { loginWithGoogle } from "./function/loginWithGoogle";
import { GoogleLogo } from "@/assets/logo/GoogleLogo";

type propType = {};

export const LoginPage = ({}: propType) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <>
      <div
        className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
        style={{ display: "flex" }}
      >
        <div
          className="w-full flex flex-col items-center max-w-md space-y-8"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <div
            className="flex flex-col items-center gap-8"
            style={{ display: "flex", flexDirection: "column", gap: "8px" }}
          >
            logo
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Login in to your account
            </h2>
          </div>
          <Button
            isLoading={isLoading}
            type="button"
            className="max-w-sm mx-auto w-full"
            onClick={() => loginWithGoogle({ setIsLoading })}
          >
            {isLoading ? null : <GoogleLogo />} Google
          </Button>
        </div>
      </div>
    </>
  );
};
