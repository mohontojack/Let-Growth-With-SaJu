/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./i18n";
import Home from "./pages/Home";
import ServiceDetail from "./pages/ServiceDetail";
import AllServices from "./pages/AllServices";
import Locations from "./pages/Locations";
import LocationDetail from "./pages/LocationDetail";
import Metaverse from "./pages/Metaverse";
import Layout from "./components/Layout";

export default function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <Router>
      <Layout 
        isChatOpen={isChatOpen} 
        onOpenChat={() => setIsChatOpen(true)} 
        onCloseChat={() => setIsChatOpen(false)}
      >
        <Routes>
          <Route path="/" element={<Home onOpenChat={() => setIsChatOpen(true)} />} />
          <Route path="/services" element={<AllServices />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/locations/:slug" element={<LocationDetail />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/metaverse" element={<Metaverse />} />
        </Routes>
      </Layout>
    </Router>
  );
}

