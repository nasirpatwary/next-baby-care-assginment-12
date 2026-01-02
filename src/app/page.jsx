import Banner from "@/components/homepage/Banner"
import About from "@/components/homepage/About"
import ServicesOverview from "@/components/homepage/ServicesOverview"
import Testimonial from "@/components/homepage/Testimonial"

const Home = () => {
  return (
    <div>
      <section>
        <Banner />
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
  )
}

export default Home