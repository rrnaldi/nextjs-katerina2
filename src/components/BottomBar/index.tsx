"use client";

import { usePathname } from "next/navigation";
import React from "react";
import Link from "next/link";

// Import icon dari lucide-react
import { Package, Receipt, Tag, Headphones } from "lucide-react";

type Props = {};

function BottomBar({}: Props) {
  const pathname = usePathname();

  const mainMenu = [
    {
      key: "homepage",
      label: "Home",
      icon: Package,
      slug: "/",
    },
    {
      key: "order",
      label: "Order",
      icon: Receipt,
      slug: "/order",
    },
    {
      key: "promo",
      label: "Promo",
      icon: Tag,
      slug: "/promo",
    },
    {
      key: "help",
      label: "Help",
      icon: Headphones,
      slug: "/help",
    },
  ];

  return (
    <div className="sticky bottom-4 px-4 z-50">
      <ul className="rounded-full flex justify-evenly gap-x-3 bg-white shadow-[0px_12px_30px_0px_#07041517] p-3">
        {mainMenu.map((menu) => {
          const isActive =
            pathname === menu.slug ||
            (pathname.startsWith(menu.slug) &&
              pathname.charAt(menu.slug.length) === "/");

          const Icon = menu.icon;

          return (
            <li key={menu.key}>
              <Link
                aria-current={isActive ? "true" : "false"}
                href={menu.slug}
                className={[
                  "flex flex-col items-center rounded-full px-3 py-1 w-[70px] transition",
                  isActive ? "bg-color1 text-white" : "text-gray-500",
                ].join(" ")}
              >
                <Icon className="w-6 h-6" />
                <span className="text-sm">{menu.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default BottomBar;
