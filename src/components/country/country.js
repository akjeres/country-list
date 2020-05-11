import React from "react";
import './country.css';
import Button from "../button";
import AppContext from "../../AppContext";

class Country extends React.Component {
    constructor({ item, collapsed }) {
        super();

        let children_property_name = Object.keys(item).filter(i => {
            return ('code' !== i) && ('name' !== i);
        })[0];

        this.state = { collapsed: collapsed || item[children_property_name].length };

        this.children_tags = (item[children_property_name] || []).map(i => {
            return <Country key={ i.code } item={ i } collapsed={ collapsed } />;
        });
    };

    handleClick(e) {
        this.context.toggleCollapse(this);
    };

    componentDidMount() {
        this.context.nodes.push(this);
    }


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
Country.contextType = AppContext;

export default Country;