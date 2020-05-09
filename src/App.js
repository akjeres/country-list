import React from 'react';
import CountriesGetter from "./helpers/Countries-getter";
import Countries from "./components/countries";
import Loader from "./components/loader";
import Error from "./components/error";

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            has_error: false,
            loading: true,
        }
    }

    countries = new CountriesGetter();

    componentDidMount() {
        const data = this.countries.get;

        data()
            .then(res => {
                this.setState({
                    data: res.data,
                });
            })
            .catch(err => {
                console.error(err);
                this.setState({
                    has_error: true,
                })
            })
            .finally(() => {
                this.setState({
                    loading: false,
                })
            });
    }

    render() {
        const { loading, has_error } = this.state;
        const data = has_error ? <Error /> : <Countries data={ this.state.data }/>;
        const result = loading ? <Loader /> : data;

        return (
            <div className="App">{ result }</div>
        );
    };
};
