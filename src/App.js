import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Maths from "./pages/Maths";
import Telugu from "./pages/Telugu";
import English from "./pages/English";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/maths" element={<Maths />} />
        <Route path="/telugu" element={<Telugu />} />
        <Route path="/english" element={<English />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
