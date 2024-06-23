import React from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
// Assets
import ContactImg1 from "../../assets/img/contact-1.png";
import ContactImg2 from "../../assets/img/contact-2.png";
import ContactImg3 from "../../assets/img/contact-3.png";

import EmailBaum from "../../assets/img/emailbaum.png";
import EmailLaptop from "../../assets/img/emaillaptop.png";
import EmailBlueten from "../../assets/img/emailblueten.png";
import { useRef, useState } from "react";

export default function Contact() {
  const form = useRef();
  const ref = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.VITE_EMAIL_SERVICE_ID,
        process.env.VITE_EMAIL_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.VITE_EMAIL_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setSuccess(true);
        },
        () => {
          setError(true);
        }
      );
  };

  return (
    <Wrapper id="contact">
      <div className="lightBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Kontaktiere Sie Uns Jetzt!</h1>
            <p className="font13">
              Schicken Sie uns eine Nachricht und wir werden uns so schnell wie
              möglich bei Ihnen melden.
              <br />
              Wir freuen uns darauf, von Ihnen zu hören!
            </p>
          </HeaderInfo>
          <div className="row" style={{ paddingBottom: "30px" }}>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <form ref={form} onSubmit={sendEmail}>
                <Form>
                  {error &&
                    "There was an error sending your message! Please try again."}
                  {success && "Your Message was delivered successfully!"}
                  <label className="font13">
                    Name (Person oder Unternehmen):
                  </label>
                  <input
                    type="text"
                    id="fname"
                    name="fname"
                    className="font20 extraBold"
                  />
                  <label className="font13">Email:</label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className="font20 extraBold"
                  />
                  <label className="font13">Betreff:</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="font20 extraBold"
                  />
                  <label className="font13">Nachricht</label>
                  <textarea
                    rows="4"
                    cols="50"
                    type="text"
                    id="message"
                    name="message"
                    className="font20 extraBold"
                  />
                </Form>
                <SumbitWrapper className="flex">
                  <ButtonInput
                    type="submit"
                    value="Absenden"
                    className="pointer animate radius8"
                    style={{ maxWidth: "220px" }}
                  />
                </SumbitWrapper>
              </form>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 flex">
              <div style={{ width: "50%" }}>
                <div style={{ marginTop: "100px" }}>
                  <img
                    src={EmailLaptop}
                    alt="office"
                    className="radius6"
                    style={{
                      height: "430px",
                      width: "400px",
                      marginLeft: "100px",

                      borderRadius: "8px",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  padding: 70px 0 30px 0;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Form = styled.form`
  padding: 70px 0 30px 0;
  input,
  textarea {
    width: 100%;
    background-color: transparent;
    border: 0px;
    outline: none;
    box-shadow: none;
    border-bottom: 1px solid #707070;
    height: 30px;
    margin-bottom: 30px;
  }
  textarea {
    min-height: 100px;
  }
  @media (max-width: 860px) {
    padding: 30px 0;
  }
`;
const ButtonInput = styled.input`
  border: 1px solid #7620ff;
  background-color: #7620ff;
  width: 100%;
  padding: 15px;
  outline: none;
  color: #fff;
  :hover {
    background-color: #580cd2;
    border: 1px solid #7620ff;
    color: #fff;
  }
  @media (max-width: 991px) {
    margin: 0 auto;
  }
`;
const ContactImgBox = styled.div`
  max-width: 180px;
  align-self: flex-end;
  margin: 10px 30px 10px 0;
`;
const SumbitWrapper = styled.div`
  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;
