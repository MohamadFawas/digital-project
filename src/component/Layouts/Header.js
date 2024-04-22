import Logo from "../../assets/Logo.svg";
import Menu from "../../assets/menu.svg";
import React from "react";
import { Container } from "./Container";

export const Header = () => {
  return (
    <header className="  bg-bluish-purle  ">
      <Container>
        <div
          className="flex items-center justify-between 
         lg:px-20 md:px-[3.75rem] sm:px-10 px-5 h-[77px] "
        >
          <img className="w-[238px] " alt="logo" src={Logo} />

          <nav className="md:block hidden">
            <ul className="flex items-center gap-x-5 text-sm leading-4 font-medium text-white uppercase font-inter">
              <li>Services</li>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Careers</li>
            </ul>
          </nav>
          <img src={Menu} alt="Menu" className="md:hidden block mt-2" />
        </div>
      </Container>
    </header>
  );
};
