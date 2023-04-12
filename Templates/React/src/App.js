import Home from "./component/Home";
import Footer1 from "./component/footer1/Footer1";
import Navbar1 from "./component/navbar1/Navbar1";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/Navbar1" element={<Navbar1 />} />
          <Route path="/Footer1" element={<Footer1 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
