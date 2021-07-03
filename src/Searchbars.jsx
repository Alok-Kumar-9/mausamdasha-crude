import { React, useState } from "react";

function Searchbars(props) {
  const [data, setData] = useState("");
  const updateData = (event) => {
    setData(event.target.value);
    //console.log(data);
  };

  const onSubmission = (event) => {
    event.preventDefault();
    setData("");
  };

  return (
    <>
      <div className="row my-xl-5 my-lg-5 my-md-5 my-sm-5 my-3">
        <div className="col col-xl-3 col-lg-3 col-md-2 col-sm-1 col-0"></div>
        <div className="col col-xl-6 col-lg-6 col-md-8 col-sm-10 col-12 text-center">
          <form className="row g-2" onSubmit={onSubmission}>
            <div className="col-9 m-xl-0 p-xl-0 m-lg-0 p-lg-0 m-md-0 p-md-0 m-sm-0 p-sm-0 m-0 p-0">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="searchQuery"
                  placeholder="Search City"
                  onChange={updateData}
                  value={data}
                  style={{ borderRadius: "30px" }}
                />
                <label for="searchQuery">
                  <span>City</span>
                </label>
              </div>
            </div>
            <div className="col-3">
              <button
                type="submit"
                className="btn btn-outline-info btn-lg"
                onClick={() => {
                  props.onSelect(data);
                }}
              >
                <i className="fas fa-search"></i>
              </button>
            </div>
          </form>
        </div>
        <div className="col col-xl-3 col-lg-3 col-md-2 col-sm-1 col-0"></div>
      </div>
    </>
  );
}

export default Searchbars;
