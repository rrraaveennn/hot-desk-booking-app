"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SignUpForm from "../_components/SignUpForm";
import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";

function SignUp() {
  const router = useRouter();
  const { status } = useSession();

  if (status === "authenticated") router.push("/");

  return (
    <div className="min-h-screen py-5 flex justify-center items-center">
      <Card className="sm:py-4 sm:px-2">
        <CardHeader>
          <CardTitle>Sign up</CardTitle>
          <CardDescription>
            Sign up with your firstname, lastname, email and password.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SignUpForm />
        </CardContent>
        <CardFooter className="flex flex-col items-center space-y-4">
          <Separator />
          <div className="w-full flex flex-col justify-center items-center space-y-4">
            <Button
              variant="outline"
              onClick={() => signIn("google")}
              className="w-full"
            >
              Sign up with Google
            </Button>
            <p className="text-xs text-slate-500">
              By creating an account, you agree to our Terms of Service and
              Privacy Policy.
            </p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

export default SignUp;
