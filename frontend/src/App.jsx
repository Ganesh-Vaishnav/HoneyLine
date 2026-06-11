import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@/App.css";

import AgencyLayout from "@/layouts/AgencyLayout";
import { Toaster } from "@/components/ui/sonner";

import AgencyHome from "@/pages/agency/AgencyHome";
import AgencyAbout from "@/pages/agency/AgencyAbout";
import AgencyServices from "@/pages/agency/AgencyServices";
import AgencyContact from "@/pages/agency/AgencyContact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AgencyLayout />}>
          <Route path="/" element={<AgencyHome />} />
          <Route path="/about" element={<AgencyAbout />} />
          <Route path="/services" element={<AgencyServices />} />
          <Route path="/contact" element={<AgencyContact />} />
        </Route>
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
