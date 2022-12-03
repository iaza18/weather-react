import React from "react";

export default function Search() {
  return (
    <div className="Search">
      <div className="row location">
        <div className="col-10">
          <form className="d-flex" role="search" id="city-search-form">
            <input
              className="form-control me-2 shadow-sm"
              id="search-city"
              type="search"
              placeholder="🌗 Enter Location..."
              aria-label="Search"
              autoComplete="off"
            />
          </form>
        </div>
        <div className="col-2">
          <button className="currentLocation" />
          <i className="fa-solid fa-location-dot fa-xl" id="icon"></i>
        </div>
      </div>
    </div>
  );
}
