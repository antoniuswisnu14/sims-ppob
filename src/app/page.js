import React from "react";
import Service from "./../components/Service/service";
import PromoBanner from "./../components/PromoBanner/promoBanner";
import WelcomeBalance from "../components/WelcomeBalance/welcomeBalance";
import Navbar from "../components/Navbar/navbar";
const Page = () => {
  return (
    <div >
      <section>
        <Navbar />
      </section>
      <div className="wrapper">
      <section>
        <WelcomeBalance />
      </section>
      <section>
        <Service />
      </section>
      <section>
        <PromoBanner />
      </section>
      </div>
    </div>
  );
};

export default Page;
