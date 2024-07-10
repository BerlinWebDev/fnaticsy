import React from "react";
import {Link} from "react-router-dom";
import LogoIcon from "../../assets/svg/Logo";
import styled from "styled-components";

const Impressum = () => {
  return (<>
    <Wrapper
        className="flexCenter animate whiteBg"
    >
      <NavInner className="container flexSpaceCenter">
        <Link className="pointer flexNullCenter" to="home" smooth={true}>
          <LogoIcon />
          <h1 style={{ marginLeft: "15px" }} className="font20 extraBold">
            fanatic
          </h1>
        </Link>
        <UlWrapper className="flexNullCenter">
          <li className="semiBold font15 pointer">
            <Link to="/"
            >
              zur Startseite
            </Link>
          </li>
        </UlWrapper>
      </NavInner>
    </Wrapper>
    <WrapperImpressum id="datenschutz" className="container flexSpaceCenter">
      <div>
        <h1 className="extraBold font60">Impressum</h1>
        Serkan Altin von ihre Manufaktur.de<br/>

        Programmierung von Webauftritten<br/>
        Halemweg 44B<br/>
        13627 Berlin<br/>

        E-Mail: anfrage@ihremanufaktur.de<br/>
        IhreManufaktur.de<br/>
        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:<br/>
        https://ec.europa.eu/consumers/odr/.<br/>
        Unsere E-Mail-Adresse finden Sie oben im Impressum.<br/>
        VERBRAUCHER­STREIT­BEILEGUNG/UNIVERSAL­SCHLICHTUNGS­STELLE<br/>
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
        teilzunehmen.<br/>

        Ihre Manufaktur
      </div>
    </WrapperImpressum>
  </>
);
}
const WrapperImpressum = styled.section`
  margin-top: 110px;
  width: 100%;
  min-height: 460px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Wrapper = styled.nav`
    width: 100%;
    position: fixed;
      height: 50px;
    top: 0;
    left: 0;
    z-index: 999;
    `;
const NavInner = styled.div`
    position: relative;
    height: 100%;
    `;
const UlWrapper = styled.ul`
    display: flex;
    @media (max-width: 760px) {
      display: none;
    }
    `;


export default Impressum;


