import React, { useRef } from "react";
import Hero from "./Hero";
import LearnMore from "./LearnMore";

const MainPage = () => {
  const learnMoreSection = useRef<HTMLDivElement>(null);
  return (
    <>
      <Hero learnMoreSection={learnMoreSection} />
      <LearnMore learnMoreSection={learnMoreSection} />
    </>
  );
};

export default MainPage;
