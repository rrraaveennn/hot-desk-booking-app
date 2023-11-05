"use client";

import Header from "@/components/layouts/Header";
import SideBar from "@/components/layouts/SideBar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ReactNode } from "react";

interface Prop {
  children?: ReactNode;
}

function layout({ children }: Prop) {
  return (
    <div className="min-h-screen flex overflow-hidden bg-slate-100">
      <SideBar />
      <div className="relative flex flex-col sm:ml-72 w-full">
        <Header />
        <ScrollArea className="h-screen w-full sm:pr-10 pt-20">
          {children}
        </ScrollArea>
      </div>
    </div>
  );
}

export default layout;
