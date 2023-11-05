import Image from "next/image";
import { getSession } from "./api/auth/[...nextauth]/route";
import { signIn } from "next-auth/react";
import SignInButton from "@/components/SignInButton";
import SignOutButton from "@/components/SignOutButton";

export default async function Home() {
  const session = await getSession();

  return (
    <div>
      <h1>Hello {session?.user.firstName}!</h1>
      {!session?.user ? <SignInButton provider="google" /> : <SignOutButton />}
    </div>
  );
}
