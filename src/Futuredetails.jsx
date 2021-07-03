import React from "react";

function Futuredetails(props) {
  if (props.sewage) {
    const chooseImg = (datr) => {
      if (datr == "Rain") {
        return <i class="fas fa-umbrella"></i>;
      } else if (datr == "Clouds") {
        return <i class="fas fa-cloud"></i>;
      } else if (datr == "Haze") {
        return <i class="fas fa-smog"></i>;
      } else if (datr == "Clear") {
        return <i class="fas fa-sun"></i>;
      }
    };

    const calDate = (unix) => {
      let milli = unix * 1000;
      let maaq = new Date(milli);
      let humanTime = maaq.toLocaleString(milli);
      let dayy = maaq.toLocaleString("en-US", { weekday: "short" });
      let monn = maaq.toLocaleString("en-US", { month: "short" });
      let datee = maaq.toLocaleString("en-US", { day: "numeric" });

      return (
        <>
          {dayy},{monn} {datee}
        </>
      );
    };

    const calTemp = (datr) => {
      let tr = datr;
      tr = tr - 273.15;
      let req = tr.toFixed(0);
      return req;
    };

    return (
      <>
        <div className="row mb-xl-2 mb-lg-2 mb-md-2 mb-sm-2 mb-2">
          <div className="col-auto">
            <span
              style={{
                marginLeft: "5px",
                fontSize: "20px",
              }}
            >
              <b>Daily Forecasts</b>
            </span>
          </div>
        </div>
        <div className="row">
          <div className="col col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 text-center">
            <div className="row">
              <div className="col text-center">
                <span
                  style={{
                    fontSize: "25px",
                    fontFamily: "'Baloo Tammudu 2', cursive",
                  }}
                >
                  {calDate(props.sewage.daily[1].dt)}
                </span>
              </div>
            </div>
            <div className="row">
              <div className="col text-center">
                <span style={{ fontSize: "80px" }}>
                  <b>{chooseImg(props.sewage.daily[1].weather[0].main)}</b>
                </span>
              </div>
            </div>
            <div className="row">
              <div className="col text-center">
                <span
                  style={{
                    fontSize: "20px",
                    fontWeight: "20px",
                    fontFamily: "'Titillium Web', sans-serif",
                  }}
                >
                  {calTemp(props.sewage.daily[1].temp.min)}°C |{" "}
                  {calTemp(props.sewage.daily[1].temp.max)}°C
                </span>
              </div>
            </div>
            <div className="row">
              <div className="col text-center">
                <i class="fas fa-cloud-showers-heavy"></i>{" "}
                {props.sewage.daily[1].clouds}%
              </div>
            </div>
          </div>
          <div className="col col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 text-center">
            <div className="row">
              <div className="col text-center">
                <span
                  style={{
                    fontSize: "25px",
                    fontFamily: "'Baloo Tammudu 2', cursive",
                  }}
                >
                  {calDate(props.sewage.daily[2].dt)}
                </span>
              </div>
            </div>
            <div className="row">
              <div className="col text-center">
                <span style={{ fontSize: "80px" }}>
                  <b>{chooseImg(props.sewage.daily[2].weather[0].main)}</b>
                </span>
              </div>
            </div>
            <div className="row">
              <div className="col text-center">
                <span
                  style={{
                    fontSize: "20px",
                    fontWeight: "20px",
                    fontFamily: "'Titillium Web', sans-serif",
                  }}
                >
                  {calTemp(props.sewage.daily[2].temp.min)}°C |{" "}
                  {calTemp(props.sewage.daily[2].temp.max)}°C
                </span>
              </div>
            </div>
            <div className="row">
              <div className="col text-center">
                <i class="fas fa-cloud-showers-heavy"></i>{" "}
                {props.sewage.daily[2].clouds}%
              </div>
            </div>
          </div>
          <div className="col col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 text-center">
            <div className="row">
              <div className="col text-center">
                <span
                  style={{
                    fontSize: "25px",
                    fontFamily: "'Baloo Tammudu 2', cursive",
                  }}
                >
                  {calDate(props.sewage.daily[3].dt)}
                </span>
              </div>
            </div>
            <div className="row">
              <div className="col text-center">
                <span style={{ fontSize: "80px" }}>
                  <b>{chooseImg(props.sewage.daily[3].weather[0].main)}</b>
                </span>
              </div>
            </div>
            <div className="row">
              <div className="col text-center">
                <span
                  style={{
                    fontSize: "20px",
                    fontWeight: "20px",
                    fontFamily: "'Titillium Web', sans-serif",
                  }}
                >
                  {calTemp(props.sewage.daily[3].temp.min)}°C |{" "}
                  {calTemp(props.sewage.daily[3].temp.max)}°C
                </span>
              </div>
            </div>
            <div className="row">
              <div className="col text-center">
                <i class="fas fa-cloud-showers-heavy"></i>{" "}
                {props.sewage.daily[3].clouds}%
              </div>
            </div>
          </div>
          <div className="col col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 text-center">
            <div className="row">
              <div className="col text-center">
                <span
                  style={{
                    fontSize: "25px",
                    fontFamily: "'Baloo Tammudu 2', cursive",
                  }}
                >
                  {calDate(props.sewage.daily[4].dt)}
                </span>
              </div>
            </div>
            <div className="row">
              <div className="col text-center">
                <span style={{ fontSize: "80px" }}>
                  <b>{chooseImg(props.sewage.daily[4].weather[0].main)}</b>
                </span>
              </div>
            </div>
            <div className="row">
              <div className="col text-center">
                <span
                  style={{
                    fontSize: "20px",
                    fontWeight: "20px",
                    fontFamily: "'Titillium Web', sans-serif",
                  }}
                >
                  {calTemp(props.sewage.daily[4].temp.min)}°C |{" "}
                  {calTemp(props.sewage.daily[4].temp.max)}°C
                </span>
              </div>
            </div>
            <div className="row">
              <div className="col text-center">
                <i class="fas fa-cloud-showers-heavy"></i>{" "}
                {props.sewage.daily[4].clouds}%
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

export default Futuredetails;
