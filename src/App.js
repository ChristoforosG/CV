import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CoverLetter from "./Pages/CoverLetter";
import Resume from "./Pages/Resume";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Resume />} />
        <Route path="cover" element={<CoverLetter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
