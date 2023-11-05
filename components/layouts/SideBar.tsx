import SideBarSheet from "../SideBarSheet";
import { Button } from "../ui/button";
import Link from "next/link";
import { MdOutlineDesk } from "react-icons/md";
import { BiBookBookmark } from "react-icons/bi";

const Routes = [
  {
    name: "Bookings",
    path: "/bookings",

    icon: (options: string) => <BiBookBookmark className={options} />,
  },
  {
    name: "Office",
    path: "/office",
    icon: (options: string) => <MdOutlineDesk className={options} />,
  },
];

function SideBar() {
  return (
    <div className="z-20 w-72 p-5 h-screen fixed top-0 left-0 hidden border-r border-r-slate-300 sm:block">
      <div className="h-20 flex space-x-3">
        <h1>HotDeskBooking</h1>
      </div>
      <div>
        {Routes.map((item) => {
          return (
            <Button
              key={item.name}
              variant={null}
              className="w-full flex justify-start px-4 py-2 gap-3"
              asChild
            >
              <Link href={item.path}>
                {item.icon("w-6 h-6")}
                {item.name}
              </Link>
            </Button>
          );
        })}
      </div>
    </div>
  );
}

export default SideBar;
