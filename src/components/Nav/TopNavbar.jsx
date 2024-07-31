import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {Link} from "react-scroll";
// Components
import Sidebar from "../Nav/Sidebar";
import Backdrop from "../Elements/Backdrop";
// Assets
import LogoIcon from "../../assets/svg/Logo";

import BurgerIcon from "../../assets/svg/BurgerIcon";
import Logo from "../../assets/img/Nemdo.png";

export default function TopNavbar() {
  const [y, setY] = useState(window.scrollY);
  const [sidebaropen, toggleSidebar] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  }, [y]);

  return (
      <>
        <Sidebar sidebaropen={sidebaropen} toggleSidebar={toggleSidebar}/>
        {sidebaropen && <Backdrop toggleSidebar={toggleSidebar}/>}
        <Wrapper
            className="flexCenter animate whiteBg"
            style={y > 100 ? {height: "60px"} : {height: "80px"}}
        >
          <NavInner className="container flexSpaceCenter">
            <Link className="pointer flexNullCenter" to="home" smooth={true}>
              <img
                  src={Logo}
                  alt="Nemdo"
                  width={25}
                  height={25}
              />
              <h1 style={{marginLeft: "15px", marginTop: "3px"}} className="font18 extraBold">
                Nemdo
              </h1>
            </Link>
            <BurderWrapper
                className="pointer textEnd"
                onClick={() => toggleSidebar(!sidebaropen)}
            >
              <BurgerIcon/>
            </BurderWrapper>
            <UlWrapper className="flexNullCenter">
              <li className="semiBold font15 pointer">
                <Link
                    activeClass="active"
                    style={{padding: "10px 15px"}}
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-60}
                >
                  Home
                </Link>
              </li>
              <li className="semiBold font15 pointer">
                <Link
                    activeClass="active"
                    style={{padding: "10px 15px"}}
                    to="services"
                    spy={true}
                    smooth={true}
                    offset={-60}
                >
                  Services
                </Link>
              </li>
              <li className="semiBold font15 pointer">
                <Link
                    activeClass="active"
                    style={{padding: "10px 15px"}}
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-60}
                >
                  Projekte
                </Link>
              </li>
              <li className="semiBold font15 pointer">
                <Link
                    activeClass="active"
                    style={{padding: "10px 15px"}}
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-80}
                >
                  Kontakt
                </Link>
              </li>
            </UlWrapper>
          </NavInner>
        </Wrapper>
      </>
  );
}

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;
const NavInner = styled.div`
  position: relative;
  height: 100%;
`;
const BurderWrapper = styled.button`
  outline: none;
  border: 0px;
  background-color: transparent;
  height: 100%;
  padding: 0 15px;
  display: none;
  @media (max-width: 760px) {
    display: block;
  }
`;
const UlWrapper = styled.ul`
  display: flex;
  @media (max-width: 760px) {
    display: none;
  }
`;
