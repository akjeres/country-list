const axios = require('axios');
export default class CountriesGetter {
    _base = 'https://countries.trevorblades.com';

    get = async (body) => {
        try {
            const res = await axios.post(
                this._base,
                {...JSON.parse(body)}
            );

            return res.data;
        } catch (error) {
            console.error(error);
            throw new Error(`Could not fetch ${this._base}`);
        }
    }
}