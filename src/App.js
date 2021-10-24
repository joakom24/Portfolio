import React, { useEffect, useState, lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import Navbar from "./Components/Navbar.js";
import { css } from "@emotion/react";
const Home = lazy(() => import("./Components/Home.js"));
const About = lazy(() => import("./Components/About.js"));
const Proyectos = lazy(() => import("./Components/Proyectos.js"));
const Habilidades = lazy(() => import("./Components/Habilidades.js"));
const Contacto = lazy(() => import("./Components/Contacto.js"));
const Footer = lazy(() => import("./Components/Footer.js"));

function App() {
  const [loading, setLoading] = useState(false);
  const override = css`
    display: flex;
    margin: 50vh auto;
  `;
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 8000);
  }, []);
  return (
    <Router>
      <Suspense
        fallback={
          <ClipLoader
            color={"#CD5A69"}
            loading={loading}
            size={150}
            css={override}
          />
        }
      >
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/sobremi" component={About} />
          <Route exact path="/proyectos" component={Proyectos} />
          <Route exact path="/habilidades" component={Habilidades} />
          <Route exact path="/contacto" component={Contacto} />
          <Redirect to="/" />
        </Switch>

        <Footer />
      </Suspense>
    </Router>
  );
}
export default App;
