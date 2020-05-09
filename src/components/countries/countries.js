import React from "react";
import './countries.css';
import Country from "../country";

export default class Countries extends React.Component {
    constructor({ data }) {
        super();
        this.data = data;
    }

    render() {
      return(
          <div className="countries">{
                  this.data.map((country) => {
                      return (
                          <Country key={ country.id } item={ country } collapsed={ true } />
                      )
                  })
              }</div>
      );
    };
}