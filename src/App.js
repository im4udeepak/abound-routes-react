import React, { Suspense, useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Home from "./pages/home/index";
import About from "./pages/about/index";
import SubContinent from "./pages/sub-continent/index";
import CuratedExperience from "./pages/curated-experiences/index";
import Expertise from "./pages/expertise/index";
import Contact from "./pages/contact/index";
import ScrollToTop from './components/shared/ScrollToTop';
import Preloader from './components/shared/Preloader';
import { Alert } from 'react-bootstrap';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [show, setShow] = useState(true);
  const [installPromptEvent, setInstallPromptEvent] = useState(null);

  const handleBeforeInstallPrompt = (event) => {
    // Prevent the default installation prompt
    event.preventDefault();

    // Store the event for later use
    setInstallPromptEvent(event);
  };

  const handleAddToHomeScreen = () => {
    if (installPromptEvent) {
      installPromptEvent.prompt();
      // Show your custom UI to prompt for installation
      // You can add a button that, when clicked, calls `installPromptEvent.prompt()`
    }
  };
  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    // Listen for the load event on the window
    window.addEventListener('load', handleLoad);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);
  return (
    <Router>
      <Suspense fallback={<div></div>}>
        <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/sub-continent" element={<SubContinent />} />
          <Route exact path="/curated-experiences" element={<CuratedExperience />} />
          <Route exact path="/expertise" element={<Expertise />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      {show && (<Alert variant="info" style={{ position: "fixed", bottom: '0', left: '0', right: '0', zIndex: '101' }} className='mb-0' onClick={handleAddToHomeScreen} onClose={() => setShow(false)} dismissible>
        <Alert.Heading className='mb-0'>Add to Home Screen</Alert.Heading>
      </Alert>)}
    </Router>
  );
}
const NotFoundPage = () => {
  // Redirect to the homepage
  return <Navigate to="/" replace />;
};
// Move the event listener outside of the component to ensure it's only attached once
window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent the default behavior of the installation prompt
  event.preventDefault();
  // You can store the event or handle it directly here
});
export default App;
