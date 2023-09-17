import React from "react";
import Css from "../Style/Address.module.css";
function Address() {
  return (
    <div className={Css.Adress}>
      <h3>To Visit Our Store</h3>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1750.3045433931256!2d77.17858535644208!3d28.67142129721896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d02647f5d6971%3A0xe91b07f311b57516!2sBlock%20E2%2C%20Shastri%20Nagar%2C%20Delhi%2C%20110052!5e0!3m2!1sen!2sin!4v1691174653906!5m2!1sen!2sin"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className={Css.google_Maps}
        title="Address"
      ></iframe>
    </div>
  );
}

export default Address;
