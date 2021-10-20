import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "../Styles/Contacto.css";
import { useTranslation } from "react-i18next";
import ReCAPTCHA from "react-google-recaptcha";
import swal from "sweetalert";
import "./Responsive/Contacto.css";
const Contacto = () => {
  const [t, i18n] = useTranslation("global");
  const onChange = () => {};
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
          swal(
            "Joaquín Mussi:",
            "Gracias! Me pondré en contacto contigo lo antes posible! ;)",
            "success"
          );
        },
        (error) => {
          swal("No pudimos enviar tu mensaje", "Intentalo de nuevo.", "error");
        }
      );
    form.current.reset();
    window.grecaptcha.reset();
  };
  return (
    <div className="container">
      <div className="contacto">
        <h5 className="h5">
          {t("contacto.te-gustaria")}
          <span className="contac"> {t("contacto.contactarme")}</span>?
        </h5>
        <form ref={form} onSubmit={sendEmail}>
          <label>{t("contacto.nombre")}</label>
          <input type="text" name="user_name" required />
          <label>Email</label>
          <input type="email" name="user_email" required />
          <label>{t("contacto.mensaje")}</label>
          <textarea name="message" required />
          <div className="recaptcha">
            <ReCAPTCHA
              sitekey="6LeiBMEcAAAAAJ6OxZA98HuH8auq5xSw4z_wwemz"
              onChange={onChange}
            />
          </div>
          <div className="send">
            <input
              type="submit"
              value={t("contacto.enviar")}
              className="btn-contact"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contacto;
