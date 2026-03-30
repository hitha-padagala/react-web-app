import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Maths from "./Maths";
import Telugu from "./Telugu";
import English from "./English";

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
