import * as React from 'react'
import Header from "./components/Header";
import Landing from './sections/Landing';
import About from "./sections/About";
import Services from "./sections/Services";
import FAQ from './sections/FAQ';
import ContactModal from './components/ContactModal';
import CookieConsent from "react-cookie-consent"


function App() {
  

  return (
    <>
    <Header />
    <ContactModal />
    <Landing />
    <About />
    <Services />
    <FAQ />
    <CookieConsent
        enableDeclineButton
        declineButtonText="I decline"
        buttonText="I accept"
        location="bottom"
        cookieName="myAppCookieConsent"
        style={{ background: "#1D2A6B", padding: "1em", justifyContent: "space-around" }}
        contentStyle={{ fontSize: "14px"}}
        buttonStyle={{ backgroundColor: "#6dff60", color: "#4e503b", fontSize: "14px", padding: ".4em", borderRadius: "5px"}}
        declineButtonStyle={{ backgroundColor: "#FF3B3A", color: "#F5F5F5", fontSize: "14px", padding: ".4em", borderRadius: "5px"}}
        expires={150}
        debug={true}>
          This website may use cookies to enhance the user experience.
    </CookieConsent>
    </>
  )
}

export default App
