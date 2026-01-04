"use client"
import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Tooltip
} from "@heroui/react";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import NavLink from "./NavLink";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { Loader } from "lucide-react";
import Image from "next/image";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const session = useSession()
  const pathname = usePathname();
  useEffect(() => {
      setIsMenuOpen(false);
    }, [pathname]);

  const navLinks = <>
    <NavLink href={"/services"}>Services</NavLink>
    <NavLink href={"/my-booking"}>MyBooking</NavLink>
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
         {session?.status === "loading" ? <Loader size={24} className="animate-spin text-center" />
         :
         session?.status === "authenticated" ?
         <div className="space-x-4">
         <button onClick={() => signOut()} className="btn btn-sm text-base">Sign Out</button>
         <Tooltip content={session?.data?.user?.name} showArrow={true}>
         <Image className="rounded-full btn btn-square" width={50} height={50} src={session?.data?.user?.image} alt="Login Image..."/>
         </Tooltip>
         </div> 
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
            <nav className="flex flex-col space-y-4">
              {navLinks}
            </nav>
          </NavbarMenuItem>
         <div className="mt-4">
          { session?.status === "authenticated" ?
         <>
         <button onClick={() => signOut()} className="btn btn-sm text-base w-fit">Sign Out</button>
         </> 
         :
         <div className="space-y-6">
         <NavbarItem>
         <Link href="/login" className="btn btn-sm">Login</Link>
       </NavbarItem>
       <NavbarItem>
         <Link href="/register" className="btn btn-sm">
           Sign Up
         </Link>
       </NavbarItem>
         </div>
        }
         </div>
      </NavbarMenu>
    </NextUINavbar>
  );
}

