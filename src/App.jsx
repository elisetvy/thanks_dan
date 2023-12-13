import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./Landing";
import Foqal from "./Foqal";

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/experience/foqal" element={<Foqal />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
