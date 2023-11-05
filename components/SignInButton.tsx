"use client";
import { Button } from "./ui/button";
import { signIn } from "next-auth/react";
interface Prop {
  provider: string;
}

function SignInButton({ provider }: Prop) {
  return <Button onClick={() => signIn(provider)}>Sign in</Button>;
}

export default SignInButton;
