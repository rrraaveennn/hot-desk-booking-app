"use client";

import Form from "../_components/SignInForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { signIn } from "next-auth/react";

function SignIn() {
  return (
    <div className="h-screen py-5 flex justify-center items-center">
      <Card className="sm:py-4 sm:px-2">
        <CardHeader>
          <CardTitle>Sign in</CardTitle>
          <CardDescription>
            Sign in with your email and password.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form />
        </CardContent>
        <CardFooter className="flex flex-col items-center space-y-4">
          <Separator />
          <div className="flex flex-col justify-center items center space-y-4">
            <Button variant="outline" onClick={() => signIn("google")}>
              Sign in with Google
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

export default SignIn;
