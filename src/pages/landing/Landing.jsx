import React from "react";
import Banner from "../../components/landpage/banner/Banner";
import UseCode from "../../components/landpage/usecode/UseCode";
import Convenience from "../../components/landpage/convenience/Convenience";
import Promise from "../../components/landpage/promise/Promise";
import Awards from "../../components/landpage/awards/Awards";
import Growth from "../../components/landpage/growth/Growth";
import Global from "../../components/landpage/global/Global";
import Footer from "../../components/footer/Footer";

const Landing = () => {
  return (
    <div>
      <Banner />
      <UseCode/>
      <Convenience/>
      <Promise/>
      <Awards/>
      <Global/>
      <Growth/>
      <Footer/>
    </div>
  );
};

export default Landing;
