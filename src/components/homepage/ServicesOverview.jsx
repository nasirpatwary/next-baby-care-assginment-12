import React from 'react';
import { Baby, HeartPulse, UserRound, CheckCircle2 } from 'lucide-react';

const services = [
  {
    title: "Baby Care",
    description: "Nurturing support for newborns and toddlers, focusing on safety, nutrition, and early development.",
    icon: <Baby className="w-8 h-8 text-primary" />,
    features: ["Newborn Handling", "Feeding Routines", "Developmental Play"],
    badge: "Most Popular",
    color: "bg-blue-50"
  },
  {
    title: "Elderly Service",
    description: "Dignified assistance for seniors to maintain independence and quality of life at home.",
    icon: <UserRound className="w-8 h-8 text-secondary" />,
    features: ["Mobility Support", "Companionship", "Dementia Care"],
    badge: "24/7 Available",
    color: "bg-purple-50"
  },
  {
    title: "Sick Patient Care",
    description: "Specialized support for individuals recovering from surgery or managing chronic health conditions.",
    icon: <HeartPulse className="w-8 h-8 text-accent" />,
    features: ["Medication Tracking", "Vital Monitoring", "Post-Op Recovery"],
    badge: "Medical Grade",
    color: "bg-rose-50"
  }
];

const ServicesOverview = () => {
  return (
    <section className="py-20 bg-base-100">
      <div className="container mx-auto px-4">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Our Specialized Care</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-4 rounded-full"></div>
          <p className="max-w-2xl mx-auto text-base-content/70">
            Professional, compassionate, and reliable care services tailored to your family's unique needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="card bg-base-100 shadow-xl border border-base-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-6"
            >
              <div className="card-body">
                {/* Icon & Badge */}
                <div className="flex justify-between items-start mb-4">
                  <div className={`p-4 rounded-2xl ${service.color}`}>
                    {service.icon}
                  </div>
                  <div className="badge badge-outline badge-sm opacity-70">
                    {service.badge}
                  </div>
                </div>

                {/* Content */}
                <h3 className="card-title text-2xl mb-2">{service.title}</h3>
                <p className="text-base-content/70 mb-6">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  {service.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-success" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Action Button */}
                <div className="card-actions justify-end">
                  <button className="btn btn-primary btn-block">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesOverview;