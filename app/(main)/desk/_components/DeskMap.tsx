import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

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
          <Image
            alt="desk map"
            src={require("@/public/office-deskmap.png")}
            height={500}
            width={700}
          />
          {JSON.stringify(bookings)}
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </>
  );
}

export default DeskMap;
