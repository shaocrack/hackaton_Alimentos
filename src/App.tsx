import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Payment from './modules/payment/views/Payment';
import Home from './modules/home/views/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CertificateTest } from './modules/certificates/views/CertificateTest';
import { QRMessage } from './modules/certificates/views/QRMessage';
import { QRDisplay } from './modules/certificates/views/QRDisplay';
import Dashboard from './modules/dashboard/views/Dashboard';
import About from './modules/about/views/About';
import DonateFoodEcuador from './modules/donate/views/DonateFoodEcuador';
import DonateBAQ from './modules/donate/views/DonateBAQ';
import Volunteering from './modules/donate/views/Volunteering';
import SocialOrganizations from './modules/findfood/views/SocialOrganizations';
import FamilyAssistance from './modules/findfood/views/FamilyAssistance';
import Contact from './modules/contact/views/Contact';
import Donate from './modules/donate/views/Donate';

function App() {

  return (
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donate" element={<Payment />} />
        <Route path="/certificates/test" element={<CertificateTest />} />
        <Route path="/qr-message" element={<QRMessage />} />
        <Route path="/qr-display" element={<QRDisplay />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/donate-food-ecuador" element={<DonateFoodEcuador />} />
        <Route path="/donate-baq" element={<DonateBAQ />} />
        <Route path="/volunteering" element={<Volunteering />} />
        <Route path="/social-organizations" element={<SocialOrganizations />} />
        <Route path="/family-assistance" element={<FamilyAssistance />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />
      </Routes>
    </Router>
  )
}

export default App
