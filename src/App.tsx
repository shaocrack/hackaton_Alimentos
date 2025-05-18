import './App.css'
import Payment from './modules/payment/views/Payment';
import Home from './modules/home/views/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donate" element={<Payment />} />
      </Routes>
    </Router>
  )
}

export default App;