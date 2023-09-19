import "./App.css";
import "animate.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Myheader from "./mycomponent/Myheader";
import Presentation from "./mycomponent/Presentation";
import "./Costumcolor.scss";
import "../src/mycomponent/scss/MyAccordin.scss";
import "../src/mycomponent/scss/Presentation.scss";
import "../src/mycomponent/scss/Baymish.scss";
import "../src/mycomponent/scss/Myheader.scss";

import MyAccordin from "./mycomponent/MyAccordin";
import SilvProject from "./mycomponent/SilvProject";
import MediumProject from "./mycomponent/Mediumproject";
import BaymishProject from "./mycomponent/Baymish";
import Nikeshop from "./mycomponent/Nikeshop";
import Footer from "./mycomponent/Footer";
import { Router, Route } from "react-router-dom";
function App() {
  return (
    <>
      <div className="App"></div>
      <Myheader />
      <Container variant="dark">
        <Presentation />
        <MyAccordin></MyAccordin>
        <SilvProject></SilvProject>
        <MediumProject></MediumProject>
        <BaymishProject></BaymishProject>
        <Nikeshop></Nikeshop>
      </Container>
      <Footer></Footer>
    </>
  );
}

export default App;
