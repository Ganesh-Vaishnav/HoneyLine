import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { AgencyNavbar } from "@/components/agency/AgencyNavbar";
import { AgencyFooter } from "@/components/agency/AgencyFooter";
import { Cursor } from "@/components/agency/Cursor";
import { PageLoader } from "@/components/agency/PageLoader";

export default function AgencyLayout() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  return (
    <div className="honeyline honeyline-grain min-h-screen bg-[#F2E2A4] text-[#1A1814]">
      <PageLoader />
      <Cursor />
      <AgencyNavbar />
      <main>
        <Outlet />
      </main>
      <AgencyFooter />
    </div>
  );
}
