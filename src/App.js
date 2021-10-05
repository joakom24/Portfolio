import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Navbar from "./Components/Navbar.js";
import Home from "./Components/Home.js";
import About from "./Components/About.js";
import Proyectos from "./Components/Proyectos.js";
import Habilidades from "./Components/Habilidades.js";
import Contacto from "./Components/Contacto.js";
import Footer from "./Components/Footer.js";
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/sobremi" component={About} />
          <Route path="/proyectos" component={Proyectos} />
          <Route path="/habilidades" component={Habilidades} />
          <Route path="/contacto" component={Contacto} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
