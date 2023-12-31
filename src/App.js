import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { store } from "./rtk/store";
import { Provider } from 'react-redux';

import Home from "./pages/home/index";
import About from "./pages/about/index";
import SubContinent from "./pages/sub-continent/index";
import CuratedExperience from "./pages/curated-experiences/index";
import Expertise from "./pages/expertise/index";
import Contact from "./pages/contact/index";
import ScrollToTop from './components/shared/ScrollToTop';


function App() {
  return (
    <Provider store={store}>
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
      </Router>
      <ToastContainer limit={1} />
    </Provider>
  );
}
const NotFoundPage = () => {
  // Redirect to the homepage
  return <Navigate to="/" replace />;
};
export default App;
