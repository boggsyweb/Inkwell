import * as React from 'react'
import Header from "./components/Header";
// import Footer from "./components/Footer";
import Landing from './sections/Landing';
import About from "./sections/About";
import Services from "./sections/Services";
import FAQ from './sections/FAQ';
import ContactModal from './components/ContactModal';


function App() {
  

  return (
    <>
    <Header />
    <ContactModal />
    <Landing />
    <About />
    <Services />
    <FAQ />
    </>
  )
}

export default App
