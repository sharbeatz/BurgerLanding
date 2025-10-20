import { Main } from "./pages/main/main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OrderSection from "./widgets/order-section/order-section";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/order" element={<OrderSection />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
