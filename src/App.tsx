/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Commitments from './pages/Commitments';
import PointsOfSale from './pages/PointsOfSale';
import Contact from './pages/Contact';
import { AnimatePresence, motion } from 'motion/react';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location}>
        <Route path="/" element={
          <PageWrapper>
            <Home />
          </PageWrapper>
        } />
        <Route path="/produits" element={
          <PageWrapper>
            <Products />
          </PageWrapper>
        } />
        <Route path="/a-propos" element={
          <PageWrapper>
            <About />
          </PageWrapper>
        } />
        <Route path="/engagements" element={
          <PageWrapper>
            <Commitments />
          </PageWrapper>
        } />
        <Route path="/points-de-vente" element={
          <PageWrapper>
            <PointsOfSale />
          </PageWrapper>
        } />
        <Route path="/contact" element={
          <PageWrapper>
            <Contact />
          </PageWrapper>
        } />
      </Routes>
    </AnimatePresence>
  );
}

function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="flex-grow"
    >
      {children}
    </motion.main>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </div>
    </Router>
  );
}

