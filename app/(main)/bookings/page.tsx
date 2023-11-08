import { getSession } from "@/app/api/auth/[...nextauth]/route";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Separator } from "@/components/ui/separator";
import axios from "axios";

async function getBookings() {
  const session = await getSession();

  const res = await fetch("https://bookit-edan.onrender.com/api/bookings");

  const data = await res.json();
  return data;
}

async function Bookings() {
  const bookings = await getBookings();

  return (
    <div className="p-3 sm:pt-10 sm:pl-10 flex flex-col space-y-5">
      <Card className="">
        <CardHeader className="">
          <CardTitle>Bookings</CardTitle>
          <CardDescription className="pb-3">
            Shows your booked desks.
          </CardDescription>
          <Separator orientation="horizontal" />
        </CardHeader>
        <CardContent>{JSON.stringify(bookings)}</CardContent>
      </Card>
    </div>
  );
}

export default Bookings;
