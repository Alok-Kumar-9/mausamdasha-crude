import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";

function Aqidetails(props) {
  if (props.air) {
    const feature = (datr) => {
      if (datr == 1) {
        return "Good";
      } else if (datr == 2) {
        return "Fair";
      } else if (datr == 3) {
        return "Moderate";
      } else if (datr == 4) {
        return "Poor";
      } else {
        return "Dangerous";
      }
    };

    const range = (datr) => {
      if (datr == 1) {
        return "0-50";
      } else if (datr == 2) {
        return "51-100";
      } else if (datr == 3) {
        return "101-150";
      } else if (datr == 4) {
        return "151-200";
      } else {
        return "200+";
      }
    };

    const parag = (datr) => {
      if (datr == 1) {
        return "No health implications. Enjoy your day.";
      } else if (datr == 2) {
        return "Only very few hypersensitive people should reduce outdoor activities.";
      } else if (datr == 3) {
        return "Children, seniors and individuals with respiratory or heart diseases should reduce sustained and high-intensity outdoor exercises.";
      } else if (datr == 4) {
        return "Children, seniors and individuals with heart or lung diseases should stay indoors and avoid outdoor activities. General population should reduce outdoor activities.";
      } else {
        return "Children, seniors and the sick should stay indoors and avoid physical exertion. General population should avoid outdoor activities.";
      }
    };

    return (
      <>
        <span style={{ marginLeft: "5px", fontSize: "20px" }}>
          <b>Air Quality Index</b>
        </span>
        <div className="row my-xl-2 my-lg-2 my-md-2 my-sm-2 my-2">
          <div className="col col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 m-xl-0 m-lg-0 m-md-0 m-sm-0 m-0 p-xl-1 p-lg-1 p-md-1 p-sm-1 p-1">
            <div className="row m-xl-0 m-lg-0 m-md-0 m-sm-0 m-0 p-xl-0 p-lg-0 p-md-0 p-sm-0 p-0 pl-xl-3 pl-lg-3 pl-md-3 pl-sm-3 pl-3">
              <div className="col-auto">
                <span
                  style={{
                    fontFamily: "'Noto Sans JP', sans-serif",
                    fontSize: "20px",
                    fontWeight: "2px",
                  }}
                >
                  {feature(props.air.list[0].main.aqi)}
                </span>
              </div>
            </div>
            <div className="row m-xl-0 m-lg-0 m-md-0 m-sm-0 m-0 p-xl-0 p-lg-0 p-md-0 p-sm-0 p-0">
              <div className="col-auto">
                <span
                  style={{
                    fontFamily: "'Noto Sans JP', sans-serif",
                    fontSize: "50px",
                  }}
                >
                  <b>{range(props.air.list[0].main.aqi)}</b>
                </span>
              </div>
            </div>
          </div>
          <div className="col col-xl-7 col-lg-7 col-md-7 col-sm-0 col-0 m-xl-0 m-lg-0 m-md-0 m-sm-0 m-0 mr-xl-2 mr-lg-2 mr-md-2 mr-sm-2 mr-2 p-xl-2 p-lg-2 p-md-2 p-sm-2 p-2">
            <p style={{ fontFamily: "'Baloo Tammudu 2', cursive" }}>
              {parag(props.air.list[0].main.aqi)}
            </p>
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

export default Aqidetails;
