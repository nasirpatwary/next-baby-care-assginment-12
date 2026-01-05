import Link from 'next/link';
import { Ambulance, Home } from 'lucide-react';

export const metadata = {
  title: '404 - Page Not Found | Care.xyz',
};

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-292px)] space-y-4 bg-base-100 flex flex-col items-center justify-center px-6 text-center">
      
      {/* Brand Logo */}
      <div className="flex items-center gap-2">
        <Ambulance size={40} className="text-primary" />
        <span className="text-3xl font-black text-base-content tracking-tight">
          Care<span className="text-primary">.xyz</span>
        </span>
      </div>
        <h1 className="text-3xl md:text-5xl font-semibold text-primary select-none pointer-events-none">
          404
        </h1>
          <h2 className="text-4xl font-extrabold text-base-content">
            Lost your way?
          </h2>
          <p className="text-base-content/80 text-lg leading-relaxed">
            We couldn't find the medical service or page you are looking for. 
            It might have been relocated or the link is incorrect.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/"
              className="flex items-center justify-center gap-2 bg-primary text-primary-content  rounded-2xl btn transition-all hover:scale-105 shadow-lg active:scale-95"
            >
              <Home size={20} />
              Home
            </Link>
        </div>
    </div>
  );
}