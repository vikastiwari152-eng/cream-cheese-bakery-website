import React, { Suspense, lazy } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero   from "./components/Hero.jsx";

// Below-fold sections — code-split for faster initial load
const SignatureSection = lazy(() => import("./components/SignatureSection.jsx"));
const StoryGrid        = lazy(() => import("./components/StoryGrid.jsx"));
const FullMenu         = lazy(() => import("./components/FullMenu.jsx"));
const CustomCakeStudio = lazy(() => import("./components/CustomCakeStudio.jsx"));
const IconStrip        = lazy(() => import("./components/IconStrip.jsx"));
const Reviews          = lazy(() => import("./components/Reviews.jsx"));
const Gallery          = lazy(() => import("./components/Gallery.jsx"));
const Footer           = lazy(() => import("./components/Footer.jsx"));
const FloatingWA       = lazy(() => import("./components/FloatingWA.jsx"));

// Minimal skeleton placeholder for lazy sections
function SectionSkeleton() {
  return (
    <div
      aria-hidden="true"
      style={{
        minHeight: "300px",
        background: "var(--cream)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    />
  );
}

export default function App() {
  return (
    <>
      {/* Skip navigation landmark — index.html provides .skip-link */}
      <Navbar />

      <main id="main-content" tabIndex="-1">
        {/* Critical above-fold — no lazy */}
        <Hero />

        {/* Below-fold — lazy loaded */}
        <Suspense fallback={<SectionSkeleton />}>
          <SignatureSection />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <StoryGrid />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <FullMenu />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <CustomCakeStudio />
        </Suspense>
        <Suspense fallback={null}>
          <IconStrip />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <Reviews />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <Gallery />
        </Suspense>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <FloatingWA />
      </Suspense>
    </>
  );
}
