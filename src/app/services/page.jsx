import { getAllServices } from "@/actions/server/services";
import ServiceCard from "./_component/ServiceCard";
import Container from "@/components/shared/Container";
export const metadata = {
  title: "Services",
  description: "For those who want to give their car’s paintwork",
};

const Services = async () => {
  const services = await getAllServices();
  return (
    <Container className="my-8 md:my-12">
    <div className="text-center space-y-3">
      <h2 className="text-3xl md:text-4xl font-semibold">Compassionate Care for Your Elders</h2>
      <p className="max-w-[80ch] mx-auto">Our specialized elderly care services focus on providing comfort, dignity, and professional support for your senior family members. From mobility assistance to daily companionship, our trained caregivers ensure they live a healthy and happy life in the comfort of their own home.</p>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
      {services.map((service) => (
        <ServiceCard key={service._id} service={service} />
      ))}
    </div>
    </Container>
  );
};

export default Services;
