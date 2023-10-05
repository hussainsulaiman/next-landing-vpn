import WhyChooseUs from "../components/WhyChooseUs";
import Pricing from "../components/Pricing";
import Service from "../components/Service";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import SharedValues from "../components/SharedValue";
import Team from "../components/Team";
import Testimonial from "../components/Testimonial";
import WhoWeAre from "../components/WhoWeAre";

export default function Home() {
  return (
    <>
      <SeoHead title="People First HR Consultancy" />
      <Layout>
        <Hero />
        <WhoWeAre />
        <WhyChooseUs />
        <Service />
        <SharedValues />
        <Team />
        <Testimonial />
      </Layout>
    </>
  );
}
