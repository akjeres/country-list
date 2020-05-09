import React from "react";
import "./button.css";

export default class Button extends React.Component {

    render() {
        const { text, onClick } = this.props;
        return(
            <button onClick={ onClick } disabled={ !onClick }>{ text }</button>
        );
    };
}