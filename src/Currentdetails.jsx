import React from "react";

function Currentdetails(props) {
  if (props.details) {
    return (
      <>
        <span style={{ marginLeft: "5px", fontSize: "20px" }}>
          <b>Current Details</b>
        </span>
        <div className="row my-xl-3 my-lg-3 my-md-3 my-sm-3 my-2">
          <div className=" col col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 text-center">
            <div className="row">
              <div className="col col-xl-12 col-lg-12 col-md-10 col-sm-12 col-12 text-center">
                <span style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
                  <span style={{ fontSize: "30px" }}>
                    <b>{props.details.main.pressure}</b>
                  </span>{" "}
                  <b>mBar</b>
                </span>
              </div>
            </div>
            <div className="row">
              <div className="col col-xl-12 col-lg-12 col-md-10 col-sm-12 col-12 text-center">
                <span style={{ fontSize: "30px" }}>
                  <i className="fas fa-infinity"></i>
                </span>
              </div>
            </div>
          </div>
          <div className=" col col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 text-center">
            <div className="row">
              <div className="col col-xl-12 col-lg-12 col-md-10 col-sm-12 col-12 text-center">
                <span style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
                  <span style={{ fontSize: "30px" }}>
                    <b>{props.details.main.humidity}</b>
                  </span>{" "}
                  <b>%</b>
                </span>
              </div>
            </div>
            <div className="row">
              <div className="col col-xl-12 col-lg-12 col-md-10 col-sm-12 col-12 text-center">
                <span style={{ fontSize: "30px" }}>
                  <i className="fas fa-tint"></i>
                </span>
              </div>
            </div>
          </div>
          <div className=" col col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 text-center">
            <div className="row">
              <div className="col col-xl-12 col-lg-12 col-md-10 col-sm-12 col-12 text-center">
                <span style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
                  <span style={{ fontSize: "30px" }}>
                    <b>{props.details.visibility}</b>
                  </span>{" "}
                  <b>m</b>
                </span>
              </div>
            </div>
            <div className="row">
              <div className="col col-xl-12 col-lg-12 col-md-10 col-sm-12 col-12 text-center">
                <span style={{ fontSize: "30px" }}>
                  <i className="far fa-eye"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="col col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 text-center">
            <div className="row">
              <div className="col col-xl-12 col-lg-12 col-md-10 col-sm-12 col-12 text-center">
                <span style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
                  <span style={{ fontSize: "30px" }}>
                    <b>{props.details.wind.speed}</b>
                  </span>{" "}
                  <b>m/sec</b>
                </span>
              </div>
            </div>
            <div className="row">
              <div className="col col-xl-12 col-lg-12 col-md-10 col-sm-12 col-12 text-center">
                <span style={{ fontSize: "30px" }}>
                  <i className="fas fa-wind"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div></div>
      </>
    );
  }
}

export default Currentdetails;
