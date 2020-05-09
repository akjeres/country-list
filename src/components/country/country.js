import React from "react";
import './country.css';
import Button from "../button";

export default class Country extends React.Component {
    constructor({ item, collapsed }) {
        super();

        let children_property_name = Object.keys(item).filter(i => {
            return ('code' !== i) && ('name' !== i);
        })[0];

        this.children_tags = (item[children_property_name] || []).map(i => {
            return <Country key={ i.code } item={ i } collapsed={ collapsed }/>;
        });

        this.state = { collapsed: collapsed || item[children_property_name].length };
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