import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { LiveSystem } from "./pages/LiveSystem";
import { Modules } from "./pages/Modules";
import { HowItWorks } from "./pages/HowItWorks";
import { Partners } from "./pages/Partners";
import { About } from "./pages/About";
import { Legal } from "./pages/Legal";
import { Compliance } from "./pages/Compliance";
import { API } from "./pages/API";
import { Docs } from "./pages/Docs";
import { Careers } from "./pages/Careers";
import { Blog } from "./pages/Blog";
import { Subscribe } from "./pages/Subscribe";
import { Contact } from "./pages/Contact";
import { Demo } from "./pages/Demo";
import { WhyModularityMatters } from "./pages/blog/WhyModularityMatters";
import { DesigningForClinicalPrecision } from "./pages/blog/DesigningForClinicalPrecision";
import { TriageLogicInAction } from "./pages/blog/TriageLogicInAction";
import { PartneringForWholePersonCare } from "./pages/blog/PartneringForWholePersonCare";
import { BuildingZeeAI } from "./pages/blog/BuildingZeeAI";
import { RemoteFirstCulture } from "./pages/blog/RemoteFirstCulture";
import { HIPAAComplianceModular } from "./pages/blog/HIPAAComplianceModular";
import { useEffect, useState } from "react";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    const handleRouteChange = () => {
      const path = window.location.hash.slice(1) || window.location.pathname;
      const mainPath = path.split("#")[0]; // Get path before any anchor
      
      if (mainPath === "/live-system" || mainPath === "live-system") {
        setCurrentPage("live-system");
      } else if (mainPath === "/modules" || mainPath === "modules") {
        setCurrentPage("modules");
      } else if (mainPath === "/how-it-works" || mainPath === "how-it-works") {
        setCurrentPage("how-it-works");
      } else if (mainPath === "/partners" || mainPath === "partners") {
        setCurrentPage("partners");
      } else if (mainPath === "/about" || mainPath === "about") {
        setCurrentPage("about");
      } else if (mainPath === "/careers" || mainPath === "careers") {
        setCurrentPage("careers");
      } else if (mainPath === "/contact" || mainPath === "contact") {
        setCurrentPage("contact");
      } else if (mainPath === "/demo" || mainPath === "demo") {
        setCurrentPage("demo");
      } else if (mainPath === "/subscribe" || mainPath === "subscribe") {
        setCurrentPage("subscribe");
      } else if (path.includes("/blog/why-modularity-matters") || path.includes("blog/why-modularity-matters")) {
        setCurrentPage("blog-why-modularity-matters");
      } else if (path.includes("/blog/designing-for-clinical-precision") || path.includes("blog/designing-for-clinical-precision")) {
        setCurrentPage("blog-designing-for-clinical-precision");
      } else if (path.includes("/blog/triage-logic-in-action") || path.includes("blog/triage-logic-in-action")) {
        setCurrentPage("blog-triage-logic-in-action");
      } else if (path.includes("/blog/partnering-for-whole-person-care") || path.includes("blog/partnering-for-whole-person-care")) {
        setCurrentPage("blog-partnering-for-whole-person-care");
      } else if (path.includes("/blog/building-zee-ai") || path.includes("blog/building-zee-ai")) {
        setCurrentPage("blog-building-zee-ai");
      } else if (path.includes("/blog/remote-first-culture") || path.includes("blog/remote-first-culture")) {
        setCurrentPage("blog-remote-first-culture");
      } else if (path.includes("/blog/hipaa-compliance-modular") || path.includes("blog/hipaa-compliance-modular")) {
        setCurrentPage("blog-hipaa-compliance-modular");
      } else if (mainPath === "/blog" || mainPath === "blog") {
        setCurrentPage("blog");
      } else if (mainPath === "/legal" || mainPath === "legal" || path.includes("/legal#")) {
        setCurrentPage("legal");
      } else if (mainPath === "/compliance" || mainPath === "compliance") {
        setCurrentPage("compliance");
      } else if (mainPath === "/api" || mainPath === "api") {
        setCurrentPage("api");
      } else if (mainPath === "/docs" || mainPath === "docs") {
        setCurrentPage("docs");
      } else {
        setCurrentPage("home");
      }
    };

    // Handle initial load
    handleRouteChange();

    // Listen for hash changes
    window.addEventListener("hashchange", handleRouteChange);
    window.addEventListener("popstate", handleRouteChange);

    // Intercept clicks on navigation links
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest("a");
      if (link && link.href.includes("/live-system")) {
        e.preventDefault();
        window.location.hash = "live-system";
        setCurrentPage("live-system");
        window.scrollTo(0, 0);
      } else if (link && link.href.includes("/modules")) {
        e.preventDefault();
        window.location.hash = "modules";
        setCurrentPage("modules");
        window.scrollTo(0, 0);
      } else if (link && link.href.includes("/how-it-works")) {
        e.preventDefault();
        window.location.hash = "how-it-works";
        setCurrentPage("how-it-works");
        window.scrollTo(0, 0);
      } else if (link && link.href.includes("/partners")) {
        e.preventDefault();
        window.location.hash = "partners";
        setCurrentPage("partners");
        window.scrollTo(0, 0);
      } else if (link && link.href.includes("/about")) {
        e.preventDefault();
        window.location.hash = "about";
        setCurrentPage("about");
        window.scrollTo(0, 0);
      } else if (link && link.href.includes("/careers")) {
        e.preventDefault();
        window.location.hash = "careers";
        setCurrentPage("careers");
        window.scrollTo(0, 0);
      } else if (link && link.href.includes("/contact")) {
        e.preventDefault();
        window.location.hash = "contact";
        setCurrentPage("contact");
        window.scrollTo(0, 0);
      } else if (link && link.href.includes("/demo")) {
        e.preventDefault();
        window.location.hash = "demo";
        setCurrentPage("demo");
        window.scrollTo(0, 0);
      } else if (link && link.href.includes("/subscribe")) {
        e.preventDefault();
        window.location.hash = "subscribe";
        setCurrentPage("subscribe");
        window.scrollTo(0, 0);
      } else if (link && link.href.includes("/blog")) {
        e.preventDefault();
        window.location.hash = "blog";
        setCurrentPage("blog");
        window.scrollTo(0, 0);
      } else if (link && link.href.includes("/compliance")) {
        e.preventDefault();
        window.location.hash = "compliance";
        setCurrentPage("compliance");
        window.scrollTo(0, 0);
      } else if (link && link.href.includes("/api")) {
        e.preventDefault();
        window.location.hash = "api";
        setCurrentPage("api");
        window.scrollTo(0, 0);
      } else if (link && link.href.includes("/docs")) {
        e.preventDefault();
        window.location.hash = "docs";
        setCurrentPage("docs");
        window.scrollTo(0, 0);
      } else if (link && link.href.includes("/legal")) {
        e.preventDefault();
        const fullHash = link.href.split("/legal")[1] || "";
        window.location.hash = "legal" + fullHash;
        setCurrentPage("legal");
        if (!fullHash) {
          window.scrollTo(0, 0);
        }
      } else if (link && link.href.endsWith("/")) {
        e.preventDefault();
        window.location.hash = "";
        setCurrentPage("home");
        window.scrollTo(0, 0);
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("hashchange", handleRouteChange);
      window.removeEventListener("popstate", handleRouteChange);
      document.removeEventListener("click", handleClick);
    };
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case "live-system":
        return <LiveSystem />;
      case "modules":
        return <Modules />;
      case "how-it-works":
        return <HowItWorks />;
      case "partners":
        return <Partners />;
      case "about":
        return <About />;
      case "careers":
        return <Careers />;
      case "contact":
        return <Contact />;
      case "demo":
        return <Demo />;
      case "blog":
        return <Blog />;
      case "subscribe":
        return <Subscribe />;
      case "blog-why-modularity-matters":
        return <WhyModularityMatters />;
      case "blog-designing-for-clinical-precision":
        return <DesigningForClinicalPrecision />;
      case "blog-triage-logic-in-action":
        return <TriageLogicInAction />;
      case "blog-partnering-for-whole-person-care":
        return <PartneringForWholePersonCare />;
      case "blog-building-zee-ai":
        return <BuildingZeeAI />;
      case "blog-remote-first-culture":
        return <RemoteFirstCulture />;
      case "blog-hipaa-compliance-modular":
        return <HIPAAComplianceModular />;
      case "legal":
        return <Legal />;
      case "compliance":
        return <Compliance />;
      case "api":
        return <API />;
      case "docs":
        return <Docs />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <Navigation />
      {renderPage()}
      <Footer />
    </div>
  );
}
