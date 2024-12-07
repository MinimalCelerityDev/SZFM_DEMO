import LandingPage from "../app/components/LandingPage/LandingPage";
import SecondPage from "../app/components/SecondPage/SecondPage";
import Pricing from "../app/components/Edzestervek/Pricing";
import Programs from "../app/components/ProgramsPage/Programs";
import Footer from "./components/Footer/Footer";
import ContactPage from "../app/components/Contact/Contact";

export default function Home() {
  return (
    <div>
      <LandingPage />
      <SecondPage />
      <Pricing />
      <Programs />
      <ContactPage/>
      <Footer/>
    </div>
  );
}
