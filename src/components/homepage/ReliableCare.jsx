"use client";

import dynamic from 'next/dynamic';
import { Baby, HeartHandshake, Stethoscope, ShieldCheck, Clock8, Activity } from 'lucide-react';
import Container from '../shared/Container';

// Disable SSR for the timeline to prevent hydration/prototype errors in Next.js
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
  },
  {
    id: 2,
    title: "Compassionate Senior Support",
    description: "Ensuring dignity and comfort for the elderly through personalized daily assistance and emotional companionship.",
    icon: <HeartHandshake className="w-8 h-8 text-blue-600" />,
    
  },
  {
    id: 3,
    title: "Professional Nursing",
    description: "Hospital-grade medical care delivered in the comfort of your home by licensed healthcare professionals.",
    icon: <Stethoscope className="w-8 h-8 text-emerald-600" />,
  },
  {
    id: 4,
    title: "Verified & Background Checked",
    description: "Your family's safety is our priority. Every caregiver undergoes rigorous background checks and training.",
    icon: <ShieldCheck className="w-8 h-8 text-indigo-600" />,
  },
  {
    id: 5,
    title: "24/7 Reliable Assistance",
    description: "Emergency or routine, our dedicated team is available around the clock to provide support whenever needed.",
    icon: <Clock8 className="w-8 h-8 text-amber-500" />,
    
  },
  {
    id: 6,
    title: "Specialized Rehabilitation",
    description: "Helping patients regain strength and mobility through tailored physiotherapy and exercise programs.",
    icon: <Activity className="w-8 h-8 text-cyan-600" />,
    
  }
];
const ReliableCare = () => {
  const observerOptions = {
    triggerOnce: false,
    rootMargin: '0px 0px -40px 0px'
  };

  return (
    <div className="bg-gray-50 py-16 overflow-hidden">
      <Container>
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Reliable Care Solutions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Providing trusted support for children, elderly, and patients with a focus on safety and compassion.
          </p>
        </div>

        <VerticalTimeline animate={true} lineColor="#e5e7eb">
          {careData.map((item) => (
            <VerticalTimelineElement
              key={item.id}
              className="vertical-timeline-element--work"
              contentStyle={{ background: '#fff', color: '#374151', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              contentArrowStyle={{ borderRight: '7px solid  #fff' }}
              date={item.date}
              intersectionObserverProps={observerOptions}
              iconStyle={{ background: item.bgColor, color: '#fff' }}
              icon={<div className="absolute inset-0">{item.icon}</div>}
            >
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="!text-sm !font-normal !leading-relaxed text-gray-500">
                {item.description}
              </p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </Container>
    </div>
  );
};

export default ReliableCare;