import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Separator } from "@/components/ui/separator";

function Employees() {
  return (
    <div className="p-3 sm:pt-10 sm:pl-10 flex flex-col space-y-5">
      <Card className="">
        <CardHeader className="">
          <CardTitle>Employees</CardTitle>
          <CardDescription className="pb-3"></CardDescription>
          <Separator orientation="horizontal" />
        </CardHeader>
        <CardContent></CardContent>
      </Card>
    </div>
  );
}

export default Employees;
