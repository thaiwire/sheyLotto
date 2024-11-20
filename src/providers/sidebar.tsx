import { icons } from "antd/es/image/PreviewGroup";
import { useParams, usePathname, useRouter } from "next/navigation";
import path from "path";
import React, { use, useEffect } from "react";
import classname from "classnames";
import { set } from "mongoose";

function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const [showMenu, setShowMenu] = React.useState(true);
  const params = useParams();
  const id = params.id;

  let adminsMenus: any = [
    {
      name: "Home",
      path: "/",
      icons: "ri-home-line",
      isActive: pathname === "/",
    },
    {
      name: "Lottories",
      path: "/admin/lotteries",
      icons: "ri-file-list-line",
      isActive:
        pathname === "/admin/lotteries" ||
        pathname === "/admin/lotteries/create" ||
        pathname === `/admin/lotteries/edit/${id}`,
    },
    {
      name: "Tickets",
      path: "/admin/tickets",
      icons: "ri-coupon-line",
      isActive: pathname === "/admin/tickets",
    },
    {
      name: "Users",
      path: "/admin/users",
      icons: "ri-map-pin-line",
      isActive: pathname === "/admin/users",
    },
    {
      name: "Reports",
      path: "/admin/reports",
      icons: "ri-money-dollar-box-line",
      isActive: pathname === "/admin/reports",
    },
  ];
  let userMenus = [];
  const [menusToShow, setMenusToShow] = React.useState<any[]>(adminsMenus);

  useEffect(() => {
    setMenusToShow(adminsMenus);
  }, [pathname]);

  return (
    <div
      className="bg-primary h-screen p-5 relative transition-all duration-300"
      style={{
        width: showMenu ? 250 : 80,
      }}
    >
      <h1 className="text-white text-2xl font-bold">S-L</h1>
      <div
        className="absolute right-0 top-5 bg-primary text-white py-2 px-1 rounded-sm cursor-pointer"
        onClick={() => setShowMenu(!showMenu)}
      >
        {showMenu && <i className="ri-close-line"></i>}
        {!showMenu && <i className="ri-menu-line"></i>}
      </div>

      <div
        className={classname("mt-20 flex flex-col gap-10", {
          "items-center justify-center": !showMenu,
        })}
      >
        {menusToShow.map((menu, index) => {
          return (
            <div
              key={index}
              className={classname(
                "flex gap-5 items-center cursor-pointer px-5 py-3 rounded",
                {
                  "bg-gray-700 p-5": menu.isActive,
                }
              )}
              onClick={() => router.push(menu.path)}
            >
              <span className="text-white">
                <i className={`${menu.icons}`}></i>
              </span>

              {showMenu && <span className="text-white">{menu.name}</span>}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
