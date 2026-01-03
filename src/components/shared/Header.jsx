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
import { useSession, signOut } from "next-auth/react";
import { Loader } from "lucide-react";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const session = useSession()
  console.log(session)
  const pathname = usePathname();
  useEffect(() => {
      setIsMenuOpen(false);
    }, [pathname]);

  const navLinks = <>
    <NavLink href={"/services"}>Services</NavLink>
    <NavLink href={"/my-booking"}>MyBooking</NavLink>
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
         {session.status === "loading" ? <Loader size={24} className="animate-spin text-center" />
         :
         session.status === "authenticated" ?
         <>
         <button onClick={() => signOut()} className="btn btn-sm text-base">Sign Out</button>
         </> 
         :
         <>
         <NavbarItem>
         <Link href="/login" className="btn btn-sm">Login</Link>
       </NavbarItem>
       <NavbarItem>
         <Link href="/register" className="btn btn-sm">
           Sign Up
         </Link>
       </NavbarItem>
         </>
         
        }
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

