import React from "react";
import './countries.css';
import Country from "../country";

export default class Countries extends React.Component {
    constructor({ data }) {
        super();
        this.data = data.continents;
    }

    render() {
        console.log(this.data);
        return(
          <div className="countries">{
                  this.data.map((country) => {
                      return (
                          <Country key={ country.code } item={ country } collapsed={ true } />
                      )
                  })
              }</div>
      );
    };
}