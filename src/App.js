import { Stack } from "@mui/material";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Skills from "./components/Skills";
// Animation package
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";


function App() {
  useEffect(() => {
    Aos.init(
      // {
      // duration: 1800,
      // offset: 100,
      // disable: "mobile",
      // }
    );
  }, []);
  return (
    <Stack direction='column' sx={{scrollBehavior: 'smooth'}}>
      <Navbar sx={{position: 'sticky', zIndex: 5}}/>
      <div id='Home'><Home/></div>
      <div id='About'><About/></div>
      <div id='Services'><Services /></div>
      <div id='Skills'><Skills/></div>
      <div id='Projects'><Projects/></div>
      <div id='Contacts'><Contacts/></div>
      <Footer/>
    </Stack>
  );
}

export default App;
