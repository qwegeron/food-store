"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Tabs: React.FC = () => {
  const path = usePathname();
  return (
    <>
      <div className="flex ms-auto gap-2 tabs justify-center mt-4">
        <Link href={"/pizza"} className={path === "/pizza" ? "active" : ""}>
          Pizza
        </Link>
        <Link href={"/sushi"} className={path === "/sushi" ? "active" : ""}>
          Sushi
        </Link>
        <Link href={"/soups"} className={path === "/soups" ? "active" : ""}>
          Soups
        </Link>
      </div>
    </>
  );
};

export default Tabs;
