import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "../components/layout/Layout";
import ScrollToTop from "../components/ui/ScrollToTop";
import OilVisionChat from "../components/chat/OilVisionChat";
import Home from "../pages/Home";
import Predict from "../pages/Predict";
import Dashboard from "../pages/Dashboard";
import About from "../pages/About";
import NotFound from "../pages/NotFound";

function AppRouter() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/predict" element={<Predict />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
      <OilVisionChat />
    </BrowserRouter>
  );
}

export default AppRouter;