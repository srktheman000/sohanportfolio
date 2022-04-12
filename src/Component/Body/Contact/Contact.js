import React from "react";
import "./Contact.css";
import Contactsection from "./Contactsection";
import Contacts from "../../../Assets/contact.svg";
import Separator from "../../Common/Separator/Separator";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";

const Contact = () => {
  return (
    <div>
      <Separator />
      <div className="contact-text">
        <h1 className="contact_header">Let's talk about everything!</h1>
      </div>
      <div className="Contact" id="Contact">
        <div className="about_left">
          <table>
            <tbody>
              <tr className="d-flex justify-content-center">
                <td>
                  <HiOutlineMail />
                </td>
                <td>
                  <p className="email_text">Sohan.kinage000@gmail.com</p>
                </td>
              </tr>
              <tr className="d-flex justify-content-center">
                <td>
                  <FiPhone />
                </td>
                <td className="email_text">+91-9422280491</td>
              </tr>
            </tbody>
          </table>
          <img src={Contacts} className="contact_img" alt="logo" />
        </div>
        <div className="about_right">
          <Contactsection />
        </div>
      </div>
    </div>
  );
};

export default Contact;
