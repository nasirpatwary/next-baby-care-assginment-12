import Hero from "@/components/homepage/Hero";
import About from "@/components/homepage/About";
import ServicesOverview from "@/components/homepage/ServicesOverview";
import Testimonial from "@/components/homepage/Testimonial";

const Home = () => {
  return (
    <div>
      <section>
        <Hero />
      </section>
      <section>
        <ServicesOverview />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Testimonial />
      </section>
    </div>
  );
};

export default Home;
