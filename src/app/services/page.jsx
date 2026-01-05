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
    <Container className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service) => (
        <ServiceCard key={service._id} service={service} />
      ))}
    </Container>
  );
};

export default Services;
