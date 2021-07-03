import React from "react";
import { ModalFooter } from "react-bootstrap";

function Footer() {
  return (
    <>
      <div className="row">
        <div className="col-auto">
          <span style={{fontSize: "40px"}}>
            <span style={{fontSize: "25px"}}>
              <b>Connect with us:  </b>
            </span>
            <span style={{marginLeft: "5px", marginRight: "5px"}}>
              <a href="#">
                <i class="fab fa-facebook-square"></i>    
              </a>
            </span>
            <span style={{marginLeft: "5px", marginRight: "5px"}}>
              <a href="#">
                <i class="fab fa-instagram"></i>    
              </a>
            </span>
            <span style={{marginLeft: "5px", marginRight: "5px"}}>
              <a href="#">
                <i class="fab fa-twitter"></i>    
              </a>
            </span>
            <span style={{marginLeft: "5px", marginRight: "5px"}}>
              <a href="#">
                <i class="fab fa-reddit"></i>    
              </a>
            </span>
          </span>
        </div>
      </div>
      <div className="row infotab">
        <div className="col text-center">
          <span style={{fontSize: "30px"}}>
            {" "}
            <b>Powered by </b>{" "}
          </span>
          <span style={{ fontSize: "60px" }}>
            <i class="fas fa-bolt"></i>
          </span>
          <span>
            <a href="https://openweathermap.org/"> OpenWeather</a>
          </span>
        </div>
      </div>
      <div className="row infotab">
        <div className="col text-center">
          <span style={{fontSize: "20px"}}>
            {" "}
            <b>Co-Powered by </b>{" "}
          </span>
          <span style={{ fontSize: "40px" }}>
          <i class="fas fa-hourglass-start"></i>  
          </span>
          <span>           </span>
          <span>
            <a href="https://www.abstractapi.com/">  Abstract API</a>
          </span>
        </div>
      </div>
      <div className="row infotab">
        <div className="col text-center">
          <span>
            {" "}
            <b></b>{" "}
          </span>
          <span
            style={{
              fontSize: "15px",
            }}
          >
            <b>
              We recognise our responsibility to use data and technology for
              good. Take control of your data.
            </b>
          </span>
          <span></span>
        </div>
      </div>
      <div className="row infotab">
        <div className="col text-center">
          <span>
            {" "}
            <b></b>{" "}
          </span>
          <span
            style={{
              fontSize: "12px",
            }}
          >
            <i class="fas fa-copyright"></i> Copyright 2019-2021
          </span>
          <span></span>
        </div>
      </div>
    </>
  );
}

export default Footer;
