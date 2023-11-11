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
import Image from "next/image";
import BookDesk from "./BookDesk";

interface Prop {
  bookings: any;
}

function DeskMap({ bookings }: Prop) {
  return (
    <>
      <Card>
        <CardHeader>
          <CardDescription>{""}</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center items-center">
          <BookDesk />
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </>
  );
}

export default DeskMap;
