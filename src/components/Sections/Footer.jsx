import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Assets
import LogoImg from "../../assets/svg/Logo";
import Logo from "../../assets/img/Nemdo.png";

export default function Contact() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <Wrapper>
      <div className="darkBg">
        <div className="container">
          <InnerWrapper
            className="flexSpaceCenter"
            style={{ padding: "30px 0" }}
          >
            <Link
              className="flexCenter animate pointer"
              to="/"
              smooth={true}
              offset={-80}
            >
              <img
                  src={Logo}
                  alt="Nemdo"
                  width={25}
                  height={25}
              />
              <h1
                  className="font15 extraBold whiteColor"
                  style={{marginLeft: "15px"}}
              >
                Nemdo
              </h1>
            </Link>
            <StyleP className="whiteColor font13">
              © {getCurrentYear()} -{" "}
              <span className="purpleColor font13">Nemdo</span> All Right
              Reserved
            </StyleP>
            <Link
                className="whiteColor animate pointer font13"
                to="/impressum"
            >
              Impressum
            </Link>
            <Link
                className="whiteColor animate pointer font13"
                to="/datenschutz"
            >
              Datenschutz
            </Link>

            <Link
              className="whiteColor animate pointer font13"
              to="/"
            >
              Zum Anfang
            </Link>
          </InnerWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const InnerWrapper = styled.div`
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;
const StyleP = styled.p`
  @media (max-width: 550px) {
    margin: 20px 0;
  }
`;
