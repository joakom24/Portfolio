import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "../Styles/Contacto.css";
import ReCAPTCHA from "react-google-recaptcha";
const Contacto = () => {
  const onChange = () => {
    console.log("jeje2");
  };
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_k8vdxjl",
        "template_v8xx558",
        form.current,
        "user_ZsUZqMy95NA5AhTxuAEwq"
      )
      .then(
        (result) => {
          alert("Gracias! Me pondré en contacto contigo lo antes posible! ;)");
        },
        (error) => {
          alert("No pudimos enviar tu mensaje. :(  Intentalo de nuevo.");
        }
      );
    form.current.reset();
  };

  return (
    <div className="container">
      <div className="contacto">
        <h5 className="h5">
          Te gustaría <span className="contac">contactarme</span>?
        </h5>
        <form ref={form} onSubmit={sendEmail}>
          <label>Nombre</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Mensaje</label>
          <textarea name="message" />
          <div className="recaptcha">
            <ReCAPTCHA
              sitekey="6LeiBMEcAAAAAJ6OxZA98HuH8auq5xSw4z_wwemz"
              onChange={onChange}
            />
          </div>
          <div className="send">
            <input type="submit" value="Send" className="btn-contact" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contacto;
