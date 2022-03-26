import About from "../components/About";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Kasus from "../components/Kasus";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Pengacara from "../components/Pengacara";
import Services from "../components/Services";
import Staff from "../components/Staff";

export default function Home() {
  return (
    <Layout tittle="TitoLawyer">
      <div>
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Pengacara />
        <Kasus />
        <Staff />
        <Footer />
      </div>
    </Layout>
  );
}
