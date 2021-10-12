import React, { useState, useEffect } from "react";
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
import { BeatLoader } from "react-spinners";
function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <Router>
      <>
        {isLoaded ? <Navbar /> : <BeatLoader size={72} color="red" loading />}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/sobremi" exact component={About} />
          <Route path="/proyectos" exact component={Proyectos} />
          <Route path="/habilidades" exact component={Habilidades} />
          <Route path="/contacto" exact component={Contacto} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </>
    </Router>
  );
}

export default App;
