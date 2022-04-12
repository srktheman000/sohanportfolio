import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contactsection.css";

function Contactsection() {
  const form = useRef();
  const [result, setResult] = useState(false);
  const sendemail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_iqw8fdl",
        "template_rld1bpa",
        form.current,
        "yElgSrHNhTIK1gYwr"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_iqw8fdl",
  //       "template_rld1bpa",
  //       form.current,
  //       "YOUR_PUBLIC_KEY"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // };
  return (
    <div className="container">
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossOrigin="anonymous"
      />
      <div>
        <div className="contact-form-wrapper d-flex justify-content-center">
          <form action="#" ref={form} className="contact-form">
            <h5 className="title">Get in touch!</h5>
            <p>
              Feel free to contact if you need any assistance, any help or
              another question
            </p>
            <div>
              <input
                type="text"
                className="form-control rounded border-white mb-3 form-input"
                id="name"
                name="name"
                placeholder="Name"
                required
              />
            </div>
            <div>
              <input
                type="email"
                className="form-control rounded border-white mb-3 form-input"
                placeholder="Email"
                name="user_email"
                required
              />
            </div>
            <div>
              <textarea
                id="message"
                className="form-control rounded border-white mb-3 form-text-area"
                rows={5}
                cols={30}
                name="message"
                placeholder="Message"
                required
                defaultValue={""}
              />
            </div>
            <div className="submit-button-wrapper submit_color">
              <button typr="submit" className="subbutton" onClick={sendemail}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contactsection;
