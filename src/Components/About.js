import React from "react";
import "../Styles/About.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Pdf from "../docs/Pdf.pdf";
const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="container-2"
    >
      <div className="sobre-mi">
        <div className="sobre-mi-foto"></div>
        <div className="sobre-mi-texto">
          <h2>
            Sobre <span className="mi">mí</span>
          </h2>
          <p>
            Tengo 19 años y soy Desarrollador Web FullStack Autodidacta. Me
            destaco en que lo que no sé, lo aprendo. Mi pasión por la tecnología
            me llevo a ser Técnico informático y a estudiar desarrollo web de
            forma autodidacta, estudié Ingeniería en Sistemas (2020-2021) pero
            decidí no seguir la carrera para estudiar por mi cuenta. Amante del
            fútbol y la programación. Me destaco por ser una persona que aprende
            muy rápido y por ser proactivo.
          </p>
          <Link
            to={{ pathname: "https://www.linkedin.com/in/joaquínmussi/" }}
            target="_blank"
            className="btn-link"
          >
            Ir a Linkedin
          </Link>
          <Link to={Pdf} target="_blank" className="btn-link-2">
            Ver CV
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
