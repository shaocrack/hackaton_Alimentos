import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Payment from './modules/payment/views/Payment';
import Home from './modules/home/views/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CertificateTest } from './modules/certificates/views/CertificateTest';

function App() {

  return (
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donate" element={<Payment />} />
        <Route path="/certificates/test" element={<CertificateTest />} />
      </Routes>
    </Router>
  )
}

export default App
