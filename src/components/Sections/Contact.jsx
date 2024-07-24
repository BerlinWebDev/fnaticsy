import React from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import "./Contact.css";
// Assets
import EmailLaptop from "../../assets/img/emaillaptop.png";
import { useRef, useState } from "react";

export default function Contact() {
  const [emailvalidation, setEmailvalidation] = useState("");
  const form = useRef();
  const ref = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSuccess(false);
    setError(false);
    console.log(form.current.email.value);
    if (
      !form.current.email.value.includes("@") ||
      !form.current.email.value.includes(".") ||
      form.current.email.value.length < 5 ||
      form.current.email.value.length > 50 ||
      form.current.email.value === ""
    ) {
      setEmailvalidation("Bitte geben Sie eine gültige E-Mail-Adresse ein!");
      return;
    }
    if (
      form.current.fname.value.length < 3 ||
      form.current.fname.value.length > 50 ||
      form.current.fname.value === ""
    ) {
      setEmailvalidation("Bitte geben Sie einen gültigen Namen ein!");
      return;
    }
    if (
      form.current.subject.value.length < 3 ||
      form.current.subject.value.length > 50 ||
      form.current.subject.value === ""
    ) {
      setEmailvalidation("Bitte geben Sie einen gültigen Betreff ein!");
      return;
    }
    if (
      form.current.message.value.length < 3 ||
      form.current.message.value.length > 500 ||
      form.current.message.value === ""
    ) {
      setEmailvalidation("Bitte geben Sie eine gültige Nachricht ein!");
      return;
    }
    setEmailvalidation("");

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_EMAIL_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.REACT_APP_EMAIL_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setSuccess(true);
          setError(false);
        },
        () => {
          setError(true);
          setSuccess(false);
        }
      );
  };

  return (
    <Wrapper id="contact">
      <div className="lightBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Kontaktieren Sie Uns Jetzt!</h1>
            <p className="font15">
              Schicken Sie uns eine Nachricht und wir werden uns so schnell wie
              möglich bei Ihnen melden.
              <br />
              Wir freuen uns darauf, von Ihnen zu hören!
            </p>
          </HeaderInfo>
          <div className="row" style={{ paddingBottom: "100px", marginRight:"1px", marginLeft:"1px" }}>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <form ref={form} onSubmit={sendEmail}>
                {emailvalidation && !error && (
                  <div className="error">{emailvalidation}</div>
                )}
                {error && (
                  <div className="error">Es ist ein Fehler aufgetreten!</div>
                )}
                {success && (
                  <div className="success">
                    Ihre Nachricht wurde erfolgreich versandt!
                  </div>
                )}
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
                <label className="font13">Nachricht:</label>
                <textarea
                  rows="4"
                  cols="50"
                  type="text"
                  id="message"
                  name="message"
                  className="font20 extraBold"
                />

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
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 flex justify-center">
              <div style={{}}>
                <div>
                  <img
                    src={EmailLaptop}
                    alt="office"
                    id="contactImg"
                    className="radius6"
                    style={{
                      height: "430px",
                      width: "400px",
                      marginLeft: "100px",
                      contain: "content",

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

const ButtonInput = styled.input`
  border: 1px solid #7620ff;
  background-color: #7620ff;
  width: 100%;
  height: 40px;
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

const SumbitWrapper = styled.div`
  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;
