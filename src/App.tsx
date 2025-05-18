import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Payment from './modules/payment/views/Payment';
import Home from './modules/home/views/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CertificateTest } from './modules/certificates/views/CertificateTest';
import { QRMessage } from './modules/certificates/views/QRMessage';
import { QRDisplay } from './modules/certificates/views/QRDisplay';

function App() {

  return (
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donate" element={<Payment />} />
        <Route path="/certificates/test" element={<CertificateTest />} />
        <Route path="/qr-message" element={<QRMessage />} />
        <Route path="/qr-display" element={<QRDisplay />} />
      </Routes>
    </Router>
  )
}

export default App
