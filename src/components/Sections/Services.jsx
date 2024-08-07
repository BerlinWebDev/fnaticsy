import React from "react";
import styled from "styled-components";
// Components
import ClientSlider from "../Elements/ClientSlider";
import ServiceBox from "../Elements/ServiceBox";
import FullButton from "../Buttons/FullButton";
// Assets
import AddImage1 from "../../assets/img/add/1.png";
import AddImage2 from "../../assets/img/add/2.png";
import AddImage3 from "../../assets/img/add/3.png";
import AddImage4 from "../../assets/img/add/4.png";

import LaptopMitBaum from "../../assets/img/add/laptopbaum.png";
import Chatbot from "../../assets/img/add/chatbot.png";
import Mentalify from "../../assets/img/add/mentalify.png";
import NextCommerce from "../../assets/img/add/nextcommerce.png";

export default function Services() {
  return (
    <Wrapper id="services">
      <div className="lightBg" style={{ padding: "50px 0" }}>
        <div className="container">
          <ClientSlider />
        </div>
      </div>
      <div className="whiteBg" style={{ padding: "60px 0" }}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Unsere Services</h1>
            <p className="font13"></p>
          </HeaderInfo>
          <ServiceBoxRow className="flex">
            <ServiceBoxWrapper>
              <ServiceBox
                icon="roller"
                title="Grafikdesign"
                subtitle="Unser Grafikdesign-Team erstellt ansprechende visuelle Inhalte, die die Markenidentität unserer Kunden stärken. Durch kreative und innovative Designlösungen sorgen wir dafür, dass die Botschaften unserer Kunden effektiv und visuell überzeugend vermittelt werden."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="monitor"
                title="Web Design"
                subtitle="Wir entwickeln moderne, benutzerfreundliche Websites, die sowohl ästhetisch ansprechend als auch funktional sind. Mit einem Fokus auf responsives Design und intuitive Benutzerführung stellen wir sicher, dass die Online-Präsenz unserer Kunden auf allen Geräten optimal dargestellt wird."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="browser"
                title="Entwicklung"
                subtitle="Wir bieten maßgeschneiderte Entwicklungsdienstleistungen an, die auf die spezifischen Bedürfnisse unserer Kunden zugeschnitten sind. Durch den Einsatz modernster Technologien und bewährter Methoden stellen wir sicher, dass unsere Lösungen effizient, skalierbar und zukunftssicher sind."
              />
            </ServiceBoxWrapper>
          </ServiceBoxRow>
        </div>
        <div className="lightBg">
          <div className="container">
            <Advertising className="flexSpaceCenter">
              <AddLeft>
                <h2
                  className="font40 extraBold"
                  style={{ "marginTop": "50px" }}
                >
                  Ein paar Worte über uns..
                </h2>
                <p className="font15" style={{ "marginBottom": "80px" }}>
                  Unsere digitale Agentur steht für innovative Lösungen und
                  herausragende Kreativität. Wir helfen Unternehmen, ihre
                  Online-Präsenz zu maximieren und ihre Zielgruppen effektiv zu
                  erreichen. Mit unserem erfahrenen Team aus Designern und
                  Entwicklern setzen wir maßgeschneiderte
                  Strategien um. Vertrauen
                  Sie auf unsere Expertise und lassen Sie uns gemeinsam Ihre
                  digitalen Ziele verwirklichen. Erleben Sie, wie wir Ihre
                  Vision in die digitale Realität umsetzen und Ihren Erfolg
                  nachhaltig steigern.
                </p>
              </AddLeft>
              <AddRight>
                <AddRightInner>
                  <div className="flexNullCenter">
                    <AddImgWrapp1 className="flexCenter">
                      <img src={LaptopMitBaum} alt="office" />
                    </AddImgWrapp1>
                    <AddImgWrapp2>
                      <img src={Chatbot} alt="office" />
                    </AddImgWrapp2>
                  </div>
                  <div className="flexNullCenter">
                    <AddImgWrapp3>
                      <img src={Mentalify} alt="office" />
                    </AddImgWrapp3>
                    <AddImgWrapp4>
                      <img src={NextCommerce} alt="office" />
                    </AddImgWrapp4>
                  </div>
                </AddRightInner>
              </AddRight>
            </Advertising>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const ServiceBoxRow = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const ServiceBoxWrapper = styled.div`
  width: 33%;
  margin-right: 5%;
  padding: 80px 0;
  text-align: center;
  @media (max-width: 860px) {
    width: 100%;
    text-align: center;
    padding: 40px 0;
  }
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  margin: 80px 0;
  padding: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 100px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column-reverse;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;
const AddLeft = styled.div`
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  position: absolute;
  top: -70px;
  right: 0;
  @media (max-width: 860px) {
    width: 80%;
    position: relative;
    order: 1;
    top: -40px;
  }
`;
const AddRightInner = styled.div`
  width: 100%;
`;
const AddImgWrapp1 = styled.div`
  width: 48%;
  margin: 0 6% 10px 6%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp2 = styled.div`
  width: 30%;
  margin: 0 5% 10px 5%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp3 = styled.div`
  width: 20%;
  margin-left: 40%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp4 = styled.div`
  width: 30%;
  margin: 0 5%auto;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
