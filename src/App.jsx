import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./Landing";
import Foqal from "./Foqal";
import LoveNotes from "./LoveNotes";

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/experience/foqal" element={<Foqal />} />
        <Route path="/experience/lovenotes" element={<LoveNotes />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
