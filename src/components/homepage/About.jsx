"use client";

import dynamic from 'next/dynamic';
import { Baby, HeartHandshake, Stethoscope, ShieldCheck, Clock8, Activity } from 'lucide-react';
import Container from '../shared/Container';
import { useTheme } from 'next-themes';

const VerticalTimeline = dynamic(
  () => import('react-vertical-timeline-component').then((mod) => mod.VerticalTimeline),
  { ssr: false }
);
const VerticalTimelineElement = dynamic(
  () => import('react-vertical-timeline-component').then((mod) => mod.VerticalTimelineElement),
  { ssr: false }
);

const careData = [
  {
    id: 1,
    title: "Nurturing Child Care",
    description: "Providing a safe, creative, and joyful environment where your little ones can thrive under expert supervision.",
    icon: <Baby className="w-8 h-8 text-rose-500" />,
    date: "2026-05-01" // May 1, 2026
  },
  {
    id: 2,
    title: "Compassionate Senior Support",
    description: "Ensuring dignity and comfort for the elderly through personalized daily assistance and emotional companionship.",
    icon: <HeartHandshake className="w-8 h-8 text-blue-600" />,
    date: "2026-05-05" // May 5, 2026
  },
  {
    id: 3,
    title: "Professional Nursing",
    description: "Hospital-grade medical care delivered in the comfort of your home by licensed healthcare professionals.",
    icon: <Stethoscope className="w-8 h-8 text-emerald-600" />,
    date: "2026-05-10" // May 10, 2026
  },
  {
    id: 4,
    title: "Verified & Background Checked",
    description: "Your family's safety is our priority. Every caregiver undergoes rigorous background checks and training.",
    icon: <ShieldCheck className="w-8 h-8 text-indigo-600" />,
    date: "2026-05-15" // May 15, 2026
  },
  {
    id: 5,
    title: "24/7 Reliable Assistance",
    description: "Emergency or routine, our dedicated team is available around the clock to provide support whenever needed.",
    icon: <Clock8 className="w-8 h-8 text-amber-500" />,
    date: "2026-05-20" // May 20, 2026
  },
  {
    id: 6,
    title: "Specialized Rehabilitation",
    description: "Helping patients regain strength and mobility through tailored physiotherapy and exercise programs.",
    icon: <Activity className="w-8 h-8 text-cyan-600" />,
    date: "2026-05-25" // May 25, 2026
  }
];
const About = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const observerOptions = {
    triggerOnce: false,
    rootMargin: '0px 0px -40px 0px'
  };

  return (
    // bg-gray-50 dark:bg-slate-950 যোগ করা হয়েছে
    <div className="bg-gray-50 dark:bg-slate-950 py-16 transition-colors duration-300 overflow-hidden">
      <Container>
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
            Reliable Care Solutions
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Providing trusted support for children, elderly, and patients with a focus on safety and compassion.
          </p>
        </div>

        {/* lineColor ডার্ক মোডে পরিবর্তন করা হয়েছে */}
        <VerticalTimeline animate={true} lineColor={isDark ? "#0B111A" : "#e5e7eb"}>
          {careData.map((item) => (
            <VerticalTimelineElement
              key={item.id}
              className="vertical-timeline-element--work"
              // contentStyle ডাইনামিক করা হয়েছে
              contentStyle={{ 
                background: isDark ? '#1e293b' : '#fff', 
                color: isDark ? '#f1f5f9' : '#374151', 
                boxShadow: isDark ? '0 10px 15px -3px rgb(0 0 0 / 0.5)' : '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                border: isDark ? '1px solid #334155' : 'none'
              }}
              contentArrowStyle={{ 
                borderRight: `7px solid ${isDark ? '#1e293b' : '#fff'}` 
              }}
              date={item.date}
              dateClassName={isDark ? "text-gray-400" : "text-gray-600"}
              intersectionObserverProps={observerOptions}
              iconStyle={{ background: item.bgColor, color: '#fff' }}
              icon={<div className="absolute inset-0 z-10">{item.icon}</div>}
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {item.title}
              </h3>
              <p className="!text-sm !font-normal !leading-relaxed text-gray-500 dark:text-gray-400">
                {item.description}
              </p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </Container>
    </div>
  );
};

export default About;