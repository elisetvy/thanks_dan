import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Landing from "./Landing";
import Foqal from "./Foqal";
import LoveNotes from "./LoveNotes";
import Jobly from "./Jobly";
import NK from "./NK";

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/portfolio/foqal" element={<Foqal />} />
        <Route path="/portfolio/lovenotes" element={<LoveNotes />} />
        <Route path="/portfolio/jobly" element={<Jobly />} />
        <Route path="/portfolio/nkagency" element={<NK />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
