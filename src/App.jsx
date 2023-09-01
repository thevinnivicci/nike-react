import Hero from "./Sections/Hero";
import CustomerReview from "./Sections/CustomerReview";
import Footer from "./Sections/Footer";
import PopularProduct from "./Sections/PopularProduct";
import Services from "./Sections/Services";
import SpecialOffer from "./Sections/SpecialOffer";
import Subscribe from "./Sections/Subscribe";
import SuperQuality from "./Sections/SuperQuality";
import Nav from "./Components/Nav";

const app = () => (
  <main className="relative">
    <Nav />
    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding">
      <PopularProduct />
    </section>
    <section className="padding">
      <SuperQuality />
    </section>
    <section className="padding padding-x py-10">
      <Services />
    </section>
    <section className="padding">
      <SpecialOffer />
    </section>
    <section className="padding bg-pale-blue">
      <CustomerReview />
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe />
    </section>
    <section className="bg-black padding-x padding-t pb-8">
      <Footer />
    </section>
  </main>
);
export default app;
