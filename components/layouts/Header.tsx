"use client";

import SideBarSheet from "../SideBarSheet";
import { Button } from "../ui/button";
import Link from "next/link";
import { MdOutlineDesk } from "react-icons/md";
import { BiBookBookmark } from "react-icons/bi";
import AvatarMenu from "../AvatarMenu";

const Routes = [
  {
    name: "bookings",
    path: "/bookings",

    icon: (options: string) => <BiBookBookmark className={options} />,
  },
  {
    name: "office",
    path: "/office",
    icon: (options: string) => <MdOutlineDesk className={options} />,
  },
];

function Header() {
  return (
    <div className="z-10 h-20 w-full fixed top-0 right-0 border-b border-slate-300 sm:pl-72">
      <div className="h-full flex justify-between items-center px-6">
        <SideBarSheet title="HotDeskBooking">
          {Routes.map((item) => {
            return (
              <Button
                variant={null}
                className="w-full flex justify-start p-2"
                asChild
              >
                <Link
                  href={item.path}
                  className="flex justify-start items-center gap-3"
                >
                  {item.icon("w-6 h-6")}
                  {item.name}
                </Link>
              </Button>
            );
          })}
        </SideBarSheet>
        <AvatarMenu />
      </div>
    </div>
  );
}

export default Header;
