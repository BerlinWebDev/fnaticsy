import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import Footer from './Footer'
import Logo from "../../assets/img/Nemdo.png";

const Impressum = () => {
  return (<>
    <Wrapper
        className="flexCenter animate whiteBg"
    >
      <NavInner className="container flexSpaceCenter">
        <Link className="pointer flexNullCenter" to="/" smooth={true}>
          <img
              src={Logo}
              alt="Nemdo"
              width={25}
              height={25}
          />
          <h1 style={{ marginLeft: "15px" }} className="font20 extraBold">
            Nemdo
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
    <WrapperImpressum id="datenschutz" className="container">
      <div>
        <h1 className="extraBold" style={{fontSize:'3vh'}}>Impressum</h1>
        Serkan Altin von Nemdo.de<br/>

        Programmierung von Webauftritten<br/>
        Halemweg 44B<br/>
        13627 Berlin<br/>

        E-Mail: anfrage@Nemdo.de<br/>
        Nemdo.de<br/>
        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:<br/>
        https://ec.europa.eu/consumers/odr/.<br/>
        Unsere E-Mail-Adresse finden Sie oben im Impressum.<br/>
        VERBRAUCHER­STREIT­BEILEGUNG/UNIVERSAL­SCHLICHTUNGS­STELLE<br/>
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
        teilzunehmen.<br/>

      </div>
    </WrapperImpressum>
        <FooterBottom style={{bottom: "0"}} >
        <Footer />
        </FooterBottom>
  </>
);
}
const WrapperImpressum = styled.section`
  margin-top: 110px;

  min-height: 460px;
  margin-bottom: 150px;
  @media (max-width: 960px) {
   

  }
`;

const FooterBottom = styled.section`
  position: fixed; bottom: 0; width: 100%;
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
    `;


export default Impressum;


