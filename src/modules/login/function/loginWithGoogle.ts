import { signIn } from "next-auth/react";
import toast from "react-hot-toast";

type propType = {
  setIsLoading: Function;
};

export const loginWithGoogle = async ({ setIsLoading }: propType) => {
  setIsLoading(true);
  try {
    await signIn("google");
  } catch (error) {
    toast.error("Something went wrong with your login.");
  } finally {
    setIsLoading(false);
  }
};
