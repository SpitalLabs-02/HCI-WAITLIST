import React from "react";
import { useState } from "react";
import { Header } from "./Components/Header";
import { Mission } from "./Components/Mission";
import { Footer } from "./Components/Footer";
import { Who } from "./Components/Who";
import { Benefit } from "./Components/Benefit";
import { HowSection } from "./Components/HowSection";
import { Hero } from "./Components/Hero";
import { WaitList } from "./Components/WaitList";
import "./index.css";

export function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="grow">
        <Hero />
        <Mission />
        <Who />
        <Benefit />
        <HowSection />
        <WaitList />
      </main>
      <Footer />
    </div>
  );
}

export default App;