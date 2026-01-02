"use client"
import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link
} from "@heroui/react";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import NavLink from "./NavLink";
import { usePathname } from "next/navigation";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

    useEffect(() => {
      setIsMenuOpen(false);
    }, [pathname]);

  const navLinks = <>
    <NavLink href={"/my-booking"}>MyBooking</NavLink>
    <NavLink href={"/services"}>Services</NavLink>
    <NavLink href={"/bookings"}>Bookings</NavLink>
    </>
  return (

    <NextUINavbar 
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="xl" position="sticky">
      <NavbarContent justify="start">
        <NavbarBrand>
         <Logo />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <nav className="space-x-6">
            {navLinks}
          </nav>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <div className="hidden md:flex gap-4">
          <NavbarItem>
          <Link href="/login" className="btn btn-sm">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/register" className="btn btn-sm">
            Sign Up
          </Link>
        </NavbarItem>
        </div>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>
      <NavbarMenu>
          <NavbarMenuItem>
            <nav className="flex flex-col space-y-3">
              {navLinks}
            </nav>
          </NavbarMenuItem>
           <NavbarItem>
          <Link href="/login" className="btn btn-sm">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/register" className="btn btn-sm">
            Sign Up
          </Link>
        </NavbarItem>
      </NavbarMenu>
    </NextUINavbar>
  );
}

