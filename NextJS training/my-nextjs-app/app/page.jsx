import React from "react";
import HomeSection from "./components/Homesection";
import Gender from "./components/Gender";
import Partofhome from "./components/Partofhome";
import Partofhome2 from "./components/Partofhome2";
import Partofhome3 from "./components/Partofhome3";


export default function Home() {
  return (
    <main className="bg-black ">
      <div className="pt-16">
      <HomeSection/>
      </div>
      <Gender/>
      <Partofhome/>
      <Partofhome2/>
      <Partofhome3/>
    </main>
  );
}