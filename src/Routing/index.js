import { HashRouter, Route, Routes } from "react-router-dom";
import HomePage from "../HomePage";
import AboutPage from "../AboutPage";
import Careers from "../Careers/careers";
import Contact from "../Contact/contact";
import ServicesModule from "../ServicesModule/services";
import ScrollToTop from "../ScrollToTop";
import PrivacyHome from "../PrivacyPolicy/PrivacyHome";
import ErrorHome from "../ErrorPage/errorHome";
import Technology from "../Services/Screens/Technology";
import ServicesPage from '../Serviceslatest/Screens/ServicesPage'

const Navigate = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/services" element={<ServicesModule />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/servicepage" element={<ServicesPage/>} />
        <Route path="/technologies" element={<Technology />} />
        <Route path="/privacy" element={<PrivacyHome />} />
        <Route path="*" element={<ErrorHome />} />
      </Routes>
    </HashRouter>
  );
};

export default Navigate;