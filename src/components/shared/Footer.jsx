import { Mail, Phone, MapPin } from "lucide-react";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagramSquare, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="footer sm:footer-horizontal bg-base-200 text-base-content py-10 px-6 lg:px-14 flex flex-wrap lg:justify-between md:gap-16 lg:gap-0">
      <aside className="max-w-sm">
        <Logo />
        <p className="mt-2">
          <strong>CarePoint Services Ltd.</strong>
          <br />
          Providing compassionate care for children, seniors, and patients since 2010. 
          Your family's well-being is our priority.
        </p>
        <div className="flex gap-4 mt-4">
          <a className="hover:text-primary cursor-pointer"><FaFacebookF  size={20} /></a>
          <a className="hover:text-primary cursor-pointer"><FaLinkedinIn size={20} /></a>
          <a className="hover:text-primary cursor-pointer"><FaTwitter size={20} /></a>
          <a className="hover:text-primary cursor-pointer"><FaInstagramSquare size={20} /></a>
        </div>
      </aside>

      <nav>
        <h6 className="footer-title text-primary">Our Services</h6>
        <a className="link link-hover">Child Care & Daycare</a>
        <a className="link link-hover">Elderly Home Care</a>
        <a className="link link-hover">Post-Hospitalization Care</a>
        <a className="link link-hover">Specialized Nursing</a>
      </nav>

      <nav>
        <h6 className="footer-title text-primary">Support</h6>
        <a className="link link-hover flex items-center gap-2">
          <Phone size={14} /> 24/7 Helpline
        </a>
        <a className="link link-hover flex items-center gap-2">
          <Mail size={14} /> contact@carepoint.com
        </a>
        <a className="link link-hover flex items-center gap-2">
          <MapPin size={14} /> Dhaka, Bangladesh
        </a>
      </nav>

      <nav>
        <h6 className="footer-title text-primary">Legal</h6>
        <a className="link link-hover">Terms of Service</a>
        <a className="link link-hover">Privacy Policy</a>
        <a className="link link-hover">Caregiver Verification</a>
      </nav>
    </footer>
  );
}