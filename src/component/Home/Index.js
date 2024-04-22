// import HeroImage from '../../assets/hero.jpg'
import HeroImage1 from "../../assets/hero1.jpg";
import React from "react";
import { Container } from "../Layouts/Container";

const Home = () => {
  return (
    <Container>
      <div
        className="relative bg-cover bg-left-bottom bg-no-repeat md:h-[700px] sm:h-[448px] h-[218px] bg-[#D9D9D9]/10 "
        style={{ backgroundImage: `url(${HeroImage1})` }}
      >
        <div className="absolute hidden md:block bottom-10 left-[60px] lg:left-20 w-[660px]">
          <CallToAction />
        </div>
      </div>
      <div className="md:hidden">
        <CallToAction />
      </div>
    </Container>
  );
};

export default Home;

const CallToAction = () => {
  return (
    <div className="bg-gradient-to-r from-lite-green to-lite-blue pt-6 px-5 pb-8 flex flex-col gap-5 items-start md:px-10 md:pt-6 md:pb-8">
      <p className="text-4xl tracking-wide font-bold leading-9 capitalize text-white text-left md:leading-[48px] md:text-5xl ">
        We crush your competitors, goals, and sales records - without the B.S.
      </p>
      <button className=" rounded bg-orange text-white uppercase font-bold leading-[14px] text-sm tracking-wide px-5 py-3">
        Get free consultation
      </button>
    </div>
  );
};
