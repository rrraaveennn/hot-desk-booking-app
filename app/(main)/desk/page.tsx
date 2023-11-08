"use client";
import { DateTimePicker } from "@/components/DateTimePicker";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import axios from "axios";
import z from "zod";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/components/ui/use-toast";
import { useState } from "react";
import DeskMap from "./_components/DeskMap";

const FormSchema = z.object({
  dob: z.date({
    required_error: "Invalid date.",
  }),
});

function Desk() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
  const [Bookings, setBookings] = useState<string[]>([]);

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const str = data.dob.toLocaleDateString();
    const res = await axios.get(
      `https://bookit-edan.onrender.com/api/bookings/${str}`
    );

    const bookings = res.data;
    if (!bookings.message) setBookings([...bookings.data]);
    toast({
      description: <p>{str}</p>,
    });
  }
  return (
    <div className="p-3 sm:pt-10 sm:pl-10 flex flex-col space-y-5">
      <Card className="">
        <CardHeader className="">
          <CardTitle>Desk map</CardTitle>
          <CardDescription className="pb-3">
            Select your desk now or whenever you want!
          </CardDescription>
          <Separator orientation="horizontal" />
        </CardHeader>
        <CardContent>
          <DateTimePicker
            label="Booking date"
            description="See available desks."
            form={form}
            onSubmit={onSubmit}
          />
        </CardContent>
      </Card>

      <DeskMap bookings={Bookings} />
    </div>
  );
}

export default Desk;
