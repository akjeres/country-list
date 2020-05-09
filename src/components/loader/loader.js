import React from "react";
import './loader.css';

export const Loader = () => {
  return(
      <div className="preloader">
          <div className="lds-ring">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
          </div>
      </div>
  );
};