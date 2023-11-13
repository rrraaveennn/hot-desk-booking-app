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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import ImageMapper from "react-img-mapper";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { getAvailableDesks } from "@/actions/actions";

interface Prop {
  bookings: any;
}

function DeskMap({ bookings }: Prop) {
  const [dialog, setDialog] = useState<boolean>(false);
  const [deskHover, setDeskHover] = useState<boolean>(false);
  const [id, setId] = useState<string>("");

  return (
    <>
      <Card>
        <CardHeader>
          <CardDescription>{""}</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center items-center">
          {/* <BookDesk /> */}
          <ImageMapper
            src={require("../../../../public/office-map-templates/385541251_888483362327970_3808793248328858061_n.png")}
            onClick={(e) => {
              setDialog(true);
              setId(e.id!);
              setDeskHover(false);
            }}
            onMouseEnter={(e) => {
              setId(e.id!);
              setDeskHover(true);
            }}
            onMouseLeave={(e) => {
              setId("");
              setDeskHover(false);
            }}
            width={600}
            height={600}
            map={{
              name: "desk-map",
              areas: [
                {
                  id: "2",
                  shape: "rect",
                  coords: [37, 37, 126, 104],
                  preFillColor: "transparent",
                  fillColor: "#22222f",
                  strokeColor: "transparent",
                },
                {
                  id: "3",
                  shape: "rect",
                  coords: [131, 39, 215, 107],
                  preFillColor: "transparent",
                  fillColor: "#22222f",
                  strokeColor: "transparent",
                },
              ],
            }}
          />
          <div
            className={cn(
              "hidden border border-slate-800 z-10 absolute top-[37] left-[40] text-white bg-slate-100 dark:bg-slate-950 rounded-lg p-10",
              deskHover && "block"
            )}
          >
            {id}
          </div>
        </CardContent>
        <CardFooter>
          <div
            className={cn(
              "hidden border border-slate-800 z-10 absolute top-[37] left-[40] text-white bg-slate-100 dark:bg-slate-950 rounded-lg p-10",
              dialog && "block"
            )}
          >
            k
          </div>
        </CardFooter>
      </Card>
    </>
  );
}

export default DeskMap;
