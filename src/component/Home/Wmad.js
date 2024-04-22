import React from "react";
import Image2Img from "../../assets/image 2.png";
import { Container } from "../Layouts/Container";
import Dsc from "./Dsc";

function Wmad() {
  const Config = {
    line1: "Web & Mobile App Development ",
    line2:
      "Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.",
  };

  return (
    <Container>
      <div className="flex flex-col sm:flex-row justify-center items-center container mx-auto py-8 md:px-10 md:pt-6 md:pb-8">
        <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
          <img src={Image2Img} className="w-full h-auto" />
        </div>
        <div className="sm:text-center h-[187px] w-full flex flex-col justify-between">
          <div>
            <h1 className="flex flex-row xl:h-[33px] lg:h-[33px] h-[66px] text-bluish-purle font-poppins text-[27px] font-semibold	text-center leading-[33px]	tracking-[0.4px]">
              {Config.line1}
            </h1>
            <p className="font-inter xl:h-[76px] xl:w-[542px] lg:h-[76px] lg:w-[530px] md:h-[95px] md:w-[393px] h-[133px] text-[16px] font-normal pl-2 sm:text-left text-center leading-[19.36px]">
              {Config.line2}
            </p>
            <br></br>
          </div>
          <div className="text-center sm:text-left">
            <button className=" px-5 py-3  rounded bg-orange text-white uppercase font-bold leading-[14px] text-sm tracking-wide">
              Learn more
            </button>
            <br></br>
            <br></br>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Wmad;
