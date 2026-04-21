import { Routes, Route, Link } from "react-router-dom";
// page imports
import SiteUnderMaintainance from "./pages/SiteUnderMaintainance";
import HomePage from "./pages/HomePage";
import GroundVilla from "./pages/villaPages/ground/GroundVilla";
import UpperVilla from "./pages/villaPages/upper/UpperVilla";
// utility imports
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/villa/ground" element={<GroundVilla />} />
        <Route path="/villa/upper" element={<UpperVilla />} />
        <Route path="/maintenance" element={<SiteUnderMaintainance />} />
      </Routes>
    </>
  );
}

export default App;
