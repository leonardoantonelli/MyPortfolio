import { Row, Col } from "react-bootstrap";
import React from "react";
import icon1 from "../assets/img/Previews/Asset 1.png";
import "./scss/Mypreview.scss";
class Mycardpreviews extends React.Component {
  render() {
    return (
      <>
        <a href={this.props.a}>
          <div className="rounded mycardhover shadow p-0">
            <img src={this.props.icon} alt="" className="w-100 " />
          </div>
        </a>
      </>
    );
  }
}

export default Mycardpreviews;
