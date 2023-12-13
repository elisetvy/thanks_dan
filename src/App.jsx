import { BrowserRouter } from "react-router-dom";

import Nav from "./Nav";
import Landing from "./Landing";
import Experience from "./Experience";
import Contact from "./Contact";

function App() {

  return (
    <>
    <BrowserRouter>
      <Nav />
      <Landing />
      <Experience />
      <Contact />
    </BrowserRouter>
    </>
  )
}

export default App
