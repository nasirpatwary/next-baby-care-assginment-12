import { Rubik } from "next/font/google";
import "./globals.css";
import 'swiper/css';
import '@smastrom/react-rating/style.css'
import 'react-vertical-timeline-component/style.min.css';
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import { Providers } from "@/providers";
const rubik = Rubik({
  weight: ["300", "400", "500", "600", "700"]
})

export const metadata = {
  applicationName: 'Care.xyz',
  metadataBase: new URL('https://next-assignment-self.vercel.app'),

  title: {
    default: 'Care.xyz | Professional Nursing & Medical Care at Home',
    template: '%s | Care.xyz',
  },

  description: 'Licensed nursing experts providing hospital-grade medical support, post-surgery recovery, and professional care at home in Bangladesh. Reliable, 24/7 patient support.',

  // Healthcare-Specific SEO Keywords
  keywords: [
    'Home Nursing Services',
    'Patient Care at Home Dhaka',
    'Professional Caregivers Bangladesh',
    'Post-Surgery Recovery Support',
    'Elderly Care Services',
    'Medical Vital Monitoring',
    'Home Physiotherapy Services',
    'Licensed Nurses for Home Care',
    'Emergency Medical Support at Home',
    'Doctor Consultation Home Visit'
  ],

  icons: {
    icon: 'https://i.ibb.co.com/HTjN97rS/logo.png',
    apple: 'https://i.ibb.co.com/HTjN97rS/logo.png',
  },

  openGraph: {
    title: 'Care.xyz - Bringing Hospital-Grade Care to Your Home',
    description: 'Expert nursing and patient care services tailored to your family’s needs.',
    url: 'https://next-assignment-self.vercel.app',
    siteName: 'Care.xyz',
    images: [
      {
        url: 'https://i.ibb.co.com/FryVFHR/Screenshot-3.png',
        width: 1200,
        height: 630,
        alt: 'Professional Patient Care Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Care.xyz | Trusted Healthcare at Home',
    description: 'The best nursing and caregiver services in your local area.',
    images: ['https://i.ibb.co.com/FryVFHR/Screenshot-3.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${rubik.className} antialiased`}
      >
        <Providers>
        <Header />
        <main className="min-h-[calc(100vh-292px)]">
            {children}
        </main>
        <Footer />
        </Providers>
      </body>
    </html>
  );
}
