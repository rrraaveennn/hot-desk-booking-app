import Image from "next/image";
import { getSession } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getSession();

  return <div>Hello {session?.user.firstName}!</div>;
}
