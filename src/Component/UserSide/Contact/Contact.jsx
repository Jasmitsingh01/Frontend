import React from "react";
import Css from "../Style/Contact.module.css";
import { HiLocationMarker } from "react-icons/hi";
import { BsTelephoneFill, BsTwitter, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { AiFillYoutube, AiFillInstagram } from "react-icons/ai";
function Contact() {
  return (
    <div className={Css.main}>
      <div className={Css.TextSection}>
        <h3 className={Css.MainHeading}>Contact</h3>
        <div className={Css.Row}>
          <div className={Css.FormCol}>
            <form>
              <div className={Css.InputArea}>
                <input type="text" placeholder="Name" className={Css.Input} />
              </div>
              <div className={Css.InputArea}>
                <input
                  type="email"
                  name="Email"
                  placeholder="Email"
                  className={Css.Input}
                />
              </div>
              <div className={Css.InputArea}>
                <textarea
                  name="msg"
                  cols="30"
                  rows="10"
                  placeholder="Message"
                  className={Css.textarea}
                ></textarea>
              </div>
              <div className={Css.ButtonArea}>
                <button type="submit" className={Css.button}>
                  Send
                </button>
              </div>
            </form>
          </div>
          <div className={Css.Secondrow}>
            <div className={Css.SmallRow}>
              <div>
                <HiLocationMarker className={Css.icon} />
              </div>
              <div className={Css.text}>New Delhi, Delhi</div>
            </div>
            <div className={Css.SmallRow}>
              <div>
                <BsTelephoneFill className={Css.icon} />
              </div>
              <div>
                <a
                  href="tel:(212) 555-2368"
                  className={Css.text}
                  id={Css.Phone}
                >
                  (212) 555-2368
                </a>
              </div>
            </div>
            <div className={Css.SmallRow}>
              <div>
                <MdEmail className={Css.icon} />
              </div>
              <div className={Css.text}>
                <a href="mailto:jasmits0072gmail.com">Emailexmaple@gmail.com</a>
              </div>
            </div>
            <div className={Css.Iconrow}>
              <div>
                <AiFillYoutube className={Css.Icon} />
              </div>
              <div>
                <BsTwitter className={Css.Icon} />
              </div>
              <div>
                <AiFillInstagram className={Css.Icon} />
              </div>
              <div>
                {" "}
                <BsLinkedin className={Css.Icon} />
              </div>
            </div>
            <div className={Css.CopyRight}>© ALL OF THE RIGHTS RESERVED</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
