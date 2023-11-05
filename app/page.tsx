import Image from "next/image";
import { getSession } from "./api/auth/[...nextauth]/route";
import { Resend } from "resend";

export default async function Home() {
  const session = await getSession();

  const resend = new Resend(process.env.RESEND_API_KEY);

  const data = await resend.emails.send({
    from: process.env.RESEND_EMAIL!,
    to: [
      "johnraybendelarama@student.laverdad.edu.ph",
      "delaramajohnrayben@gmail.com",
    ],
    subject: "Welcome",
    html: "<p>Hello World!<p>",
  });

  return <div>Hello {JSON.stringify(data)}!</div>;
}
