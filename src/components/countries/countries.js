import React from "react";
import './countries.css';
import Country from "../country";
import AppContext from "../../AppContext";

function get_path(nodes, ref) {
    const result = [ ref._reactInternalFiber._debugID ];
    let item = ref.props.item;
    const len = nodes.length;

    // Push ref._reactInternalFiber._debugID if item in not code not name in item of element
    function get_tag_id() {
        for (let i = 0; i < len; i++) {
            const component = nodes[i];
            const prop_for_comparison = Object.keys(component.props.item).filter(key => {
                return ('code' !== key && 'name' !== key);
            })[0];
            if (prop_for_comparison) {
                const items = component.props.item[prop_for_comparison];
                const items_len = items.length;
                //console.log(JSON.stringify(item) === JSON.stringify(component[j]));
                // const items_len = component[prop_for_comparison].length;
                for (let j = 0; j < items_len; j++ ) {
                    if (JSON.stringify(item) === JSON.stringify(items[j])) {
                        //console.log(component._reactInternalFiber._debugID);
                        result.push(component._reactInternalFiber._debugID);
                        item = component.props.item;
                        return get_tag_id();
                    }
                }
            }
        }
    }
    get_tag_id();
    /*console.log(nodes, ref);
    console.log(item);*/

    return result;
}

export default class Countries extends React.Component {
    constructor({ data }) {
        super();
        this.data = data.continents;

        this.toggleCollapse = (e) => {
            const nodes = this.state.nodes;
            const path = get_path(nodes, e); // Get VirtualDOM tree path to target
            this.state.nodes.forEach(i => {
                let state_collapsed = true;
                if (~path.indexOf(i._reactInternalFiber._debugID)) { //If i exist in VirtualDOM tree path
                    if (i === e) {
                        state_collapsed = !i.state.collapsed;        // Action with target
                    } else {
                        state_collapsed = false;                     // Expand all other path
                    }
                }
                this.setState.call(i, {
                    collapsed: state_collapsed
                });
            });
            this.setState.bind(this,{
                target: e
            });
        };

        this.state = {
            target: null,
            nodes: [],
            toggleCollapse: this.toggleCollapse
        }
    }

    render() {
        return(
            <AppContext.Provider value={ this.state }>
                <div className="countries">{
                    this.data.map((country) => {
                        return (
                            <Country key={ country.code } item={ country } collapsed={ true } />
                        )
                    })
                }</div>
            </AppContext.Provider>
      );
    };
}