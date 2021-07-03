import React from "react";
import "./App.css";

function Maintab(props) {
  if (props.data) {
    let tt = props.data.main.temp;
    tt = tt - 273.15;
    let currtemp = tt.toFixed(0);

    let rrr = props.data.main.feels_like;
    rrr = rrr - 273.15;
    let remp = rrr.toFixed(0);

    const calGmt = (datrr) => {
      let rea = datrr * 60;
      let yy = new Date();
      let ww = yy.getMinutes();
      //console.log(ww);
      let rr;
      if (ww != aaa) {
        rr = "0";
      } else if (ww == aaa) {
        rr = "3";
      }
      let kk = Math.abs(Math.floor(rea / 60));

      if (rea < 0) {
        return (
          <>
            -{kk}.{rr}0
          </>
        );
      } else if (rea > 0) {
        return (
          <>
            +{kk}.{rr}0
          </>
        );
      } else if (rea == 0) {
        if (rea < 0) {
          return (
            <>
              {kk}.{rr}0
            </>
          );
        }
      }
    };

    if (props.timedata.datetime == undefined) {
      props.timedata.datetime = "";
    }

    if (props.timedata.gmt_offset == undefined) {
      props.timedata.gmt_offset = 0;
    }

    let qq = "";
    let aqq = "";
    let aaa = 0;
    if (props.timedata.datetime != "") {
      let rr = props.timedata.datetime;
      qq = rr.substr(0, 16);
      aqq = rr.substr(14, 2);
      //console.log(aqq);
      //console.log(typeof(aqq));
      aaa = Number(aqq);
      //console.log(aaa);
      //console.log(typeof(aaa));
    } else {
      qq = props.timedata.datetime;
      aqq = props.timedata.datetime;
      aaa = 0;
    }

    let qw = calGmt(props.timedata.gmt_offset);

    const chooseImg = (datr) => {
      if (datr == "Rain") {
        return <i class="fas fa-umbrella"></i>;
      } else if (datr == "Clouds") {
        return <i class="fas fa-cloud"></i>;
      } else if (datr == "Haze") {
        return <i class="fas fa-smog"></i>;
      } else if (datr == "Clear") {
        return <i class="fas fa-sun"></i>;
      } else if (datr == "Smoke") {
        return <i class="fab fa-cloudversify"></i>;
      } else {
        return <i class="fas fa-rainbow"></i>;
      }
    };

    const rainPrediction = (datr) => {
      if (datr <= 30) {
        return `Low chances of precipitation(${datr}%)`;
      } else if (datr > 30 && datr <= 50) {
        return `Low to moderate rainfall expected(${datr}%)`;
      } else if (datr > 50 && datr <= 70) {
        return `Moderate to high rainfall expected(${datr}%)`;
      } else if (datr > 70 && datr <= 90) {
        return ` Heavy rainfall expected(${datr}%)`;
      } else if (datr > 90 && datr <= 100) {
        return (
          <span style={{ color: "red", fontSize: "20px" }}>
            Very heavy rainfall expected({datr}%)
          </span>
        );
      }
    };
    return (
      <>
        <div className="row m-xl-0 m-lg-0 m-md-0 m-sm-0 m-0 my-xl-0 my-lg- my-md-0 my-sm-0 my-0">
          <div className="col-auto">
            <span
              style={{
                fontSize: "30px",
                fontFamily: "'Mate SC', serif",
              }}
            >
              <b>
                {props.data.name}, {props.data.sys.country}
              </b>
            </span>
          </div>
        </div>
        <div className="row m-xl-0 m-lg-0 m-md-0 m-sm-0 m-0 my-xl-0 my-lg- my-md-0 my-sm-0 my-0">
          <div className="col-auto">
            <span
              style={{
                fontSize: "30px",
                fontFamily: "'Source Sans Pro', sans-serif",
              }}
            >
              <b>
                {qq} | GMT {qw}
              </b>
            </span>
          </div>
        </div>
        <div className="row m-xl-0 m-lg-0 m-md-0 m-sm-0 m-0 my-xl-0 my-lg- my-md-0 my-sm-0 my-0 mx-xl-0 mx-lg-0 mx-md-0 mx-sm-0 mx-0 px-lg-0 px-xl-0 px-md-0 px-sm-0 px-0">
          <div className=" col col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mx-xl-0 mx-lg-0 mx-md-0 mx-sm-0 mx-0 px-lg-0 px-xl-0 px-md-0 px-sm-0 px-0 py-lg-0 py-xl-0 py-md-0 py-sm-0 py-0">
            <div className="row mx-xl-0 mx-lg-0 mx-md-0 mx-sm-0 mx-0 px-lg-0 px-xl-0 px-md-0 px-sm-0 px-0">
              <div className="col col-xl-12 col-lg-12 col-md-10 col-sm-12 col-12 mx-xl-0 mx-lg-0 mx-md-0 mx-sm-0 mx-0 px-lg-2 px-xl-2 px-md-2 px-sm-2 px-2 py-lg-0 py-xl-0 py-md-0 py-sm-0 py-0">
                <span style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
                  <span style={{ fontSize: "80px" }}>
                    <b>{currtemp}</b>
                  </span>{" "}
                  <b>°C</b>
                </span>
              </div>
            </div>
            <div className="row mx-xl-0 mx-lg-0 mx-md-0 mx-sm-0 mx-0 px-lg-0 px-xl-0 px-md-0 px-sm-0 px-0 py-lg-0 py-xl-0 py-md-0 py-sm-0 py-0">
              <div className="col col-xl-12 col-lg-12 col-md-10 col-sm-12 col-12 mx-xl-0 mx-lg-0 mx-md-0 mx-sm-0 mx-0 px-lg-2 px-xl-2 px-md-2 px-sm-2 px-2 py-lg-0 py-xl-0 py-md-0 py-sm-0 py-0">
                <span
                  style={{
                    fontWeight: "10px",
                    fontFamily: "'Noto Sans JP', sans-serif",
                  }}
                >
                  <b>{props.data.weather[0].main}</b>
                </span>
              </div>
            </div>
          </div>
          <div className="col col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 text-end">
            <div className="row">
              <div className="col col-xl-12 col-lg-12 col-md-10 col-sm-12 col-12 text-end">
                <span style={{ fontSize: "80px" }} className="picmove">
                  <b>{chooseImg(props.data.weather[0].main)}</b>
                </span>
              </div>
            </div>
            <div className="row">
              <div className="col col-xl-12 col-lg-12 col-md-10 col-sm-12 col-12 text-end">
                <b>
                  <span
                    style={{
                      fontWeight: "10px",
                      fontFamily: "'Noto Sans JP', sans-serif",
                    }}
                  >
                    Feels like {remp}°C
                  </span>
                </b>
              </div>
            </div>
          </div>
        </div>
        <div className="row m-xl-0 m-lg-0 m-md-0 m-sm-0 m-0 my-xl-0 my-lg- my-md-0 my-sm-0 my-0 text-center">
          <div className="col col-xl-3 col-lg-3 col-md-2 col-sm-2 col-2 p-xl-0 m-xl-0"></div>
          <div className="col col-xl-6 col-lg-6 col-md-8 col-sm-8 col-10">
            <span>
              <b>{rainPrediction(props.data.clouds.all)}</b>
            </span>
          </div>
          <div className="col col-xl-3 col-lg-3 col-md-2 col-sm-2 col-2"></div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <h1>Error</h1>
      </>
    );
  }
}

export default Maintab;
