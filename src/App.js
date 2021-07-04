import { React, useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbars from "./Navbars";
import Searchbars from "./Searchbars";
import Maintab from "./Maintab";
import Currentdetails from "./Currentdetails";
import Aqidetails from "./Aqidetails";
import Futuredetails from "./Futuredetails";
import Footer from "./Footer";

function App() {
  const [query, setQuery] = useState("Patna");

  const updateQuery = (data) => {
    setQuery(data);
  };

  const [city, setCity] = useState({});
  const [cityaqi, setAqi] = useState({});
  const [citytime, setTime] = useState({});
  const [future, setFuture] = useState({});

  const [coordinates, setCoor] = useState({
    latt: "-98",
    lonn: "-198",
  });

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=5c44f268198d1bbcdeb4483bb819d62c`;
      const response = await fetch(url);
      const jsonResponse = await response.json();
      //console.log(jsonResponse);
      if (jsonResponse.cod == 404) {
        setCity({});
        setCoor((preValue) => {
          return {
            latt: "-98",
            lonn: "-198",
          };
        });
      } else {
        setCity(jsonResponse);
        setCoor((preValue) => {
          return {
            latt: jsonResponse.coord.lat,
            lonn: jsonResponse.coord.lon,
          };
        });
      }
      const url1 = `https://timezone.abstractapi.com/v1/current_time/?api_key=c54d3b6c812148c3a645303b26365114&location=${query}`;
      const response2 = await fetch(url1);
      const jsonResponse2 = await response2.json();
      //console.log(jsonResponse2);
      setTime(jsonResponse2);
    };
    fetchApi();
  }, [query]);

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${coordinates.latt}&lon=${coordinates.lonn}&appid=5c44f268198d1bbcdeb4483bb819d62c`;
      const response1 = await fetch(url);
      const jsonResponse1 = await response1.json();
      //console.log(jsonResponse1);
      jsonResponse1.cod != 400 ? setAqi(jsonResponse1) : setAqi({});

      const url1 = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.latt}&lon=${coordinates.lonn}&exclude=minutely,hourly&appid=5c44f268198d1bbcdeb4483bb819d62c`;
      const response11 = await fetch(url1);
      const jsonResponse11 = await response11.json();
      //console.log(jsonResponse11);
      jsonResponse11.cod != 400 ? setFuture(jsonResponse11) : setFuture({});
    };
    fetchApi();
  }, [coordinates.latt, coordinates.lonn]);

  const mainTabRender = () => {
    let ee;
    if (Object.keys(city).length == 0) {
      return <Maintab data={ee} timedata={citytime} />;
    } else if (Object.keys(city).length != 0) {
      return <Maintab data={city} timedata={citytime} />;
    }
  };

  const detailingRender = () => {
    let ee;
    if (Object.keys(city).length == 0) {
      return <Currentdetails details={ee} />;
    } else if (Object.keys(city).length != 0) {
      return <Currentdetails details={city} />;
    }
  };

  const airRender = () => {
    let ee;
    if (Object.keys(cityaqi).length == 0) {
      return <Aqidetails air={ee} />;
    } else if (Object.keys(city).length != 0) {
      return <Aqidetails air={cityaqi} />;
    }
  };

  const futureRender = () => {
    let ee;
    if (Object.keys(future).length == 0) {
      return <Futuredetails sewage={ee} />;
    } else if (Object.keys(future).length != 0) {
      return <Futuredetails sewage={future} />;
    }
  };

  return (
    <>
      <Navbars />
      <div className="container-fluid my-xl-2 my-lg-2 my-md-2 my-sm-2 my-2 p-xl-0 p-lg-0 p-md-0 p-sm-0 p-0 py-xl-1 py-lg-1 py-md-1 py-sm-1 py-1 search_bar">
        <Searchbars onSelect={updateQuery} />
      </div>
      <div className="container-fluid my-xl-2 my-lg-2 my-md-2 my-sm-2 my-2 p-xl-0 p-lg-0 p-md-0 p-sm-0 p-0 py-xl-1 py-lg-1 py-md-1 py-sm-1 py-1 main_div">
        {mainTabRender()}
      </div>
      <div className="container-fluid my-xl-2 my-lg-2 my-md-2 my-sm-2 my-2 p-xl-0 p-lg-0 p-md-0 p-sm-0 p-0 py-xl-3 py-lg-3 py-md-3 py-sm-3 py-2 main_div">
        {detailingRender()}
      </div>
      <div className="container-fluid my-xl-2 my-lg-2 my-md-2 my-sm-2 my-2 p-xl-0 p-lg-0 p-md-0 p-sm-0 p-0 py-xl-3 py-lg-3 py-md-3 py-sm-3 py-2 main_div">
        {airRender()}
      </div>
      <div className="container-fluid my-xl-2 my-lg-2 my-md-2 my-sm-2 my-2 p-xl-0 p-lg-0 p-md-0 p-sm-0 p-0 py-xl-3 py-lg-3 py-md-3 py-sm-3 py-2 main_div">
        {futureRender()}
      </div>
      <div className="container-fluid footer_div">
        <Footer />
      </div>
    </>
  );
}

export default App;
