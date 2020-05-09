import React from "react";
import './country.css';
import Button from "../button";

export default class Country extends React.Component {
    constructor({ item, collapsed }) {
        super();

        this.children_tags = (item.children || []).map(item => {
            return <Country key={ item.id } item={ item } collapsed={ true }/>
        });

        this.state = { collapsed };
    };

    handleClick(e) {
        console.log(e.target);
        const { collapsed } = this.state;
        this.setState({
            collapsed: !collapsed
        });
    };


    render() {
        const children_style = this.state.collapsed ? 'none' : null;
        const handle_click = this.children_tags.length ? this.handleClick.bind(this) : null;
        return(
            <div className="children">
                <div className="parent">{ <Button onClick={ handle_click }
                                                  text={ this.props.item.name } /> }</div>
                <div style={{
                    display: children_style,
                }}>
                    { this.children_tags }
                </div>
            </div>
        );
    };
}