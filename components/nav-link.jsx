"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLink({ children, href }) {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={`${path === href ? "active nav-link" : "nav-link"}`}
    >
      {children}
    </Link>
  );
}

export default NavLink;
