import React from "react";
import Search from "../../components/homepage/search/Search";
import Video from "../../components/homepage/video/Video";
import FAQ from "../../components/homepage/faq/FAQ";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <>
      <Search />
      <Video />
      <FAQ />
      <Footer />
    </>
  );
};

export default Home;
