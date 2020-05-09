export default class CountriesGetter {
    _base = '../files';

    get = async (url = '/data.json') => {
        const res = await fetch(`${this._base}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`);
        }

        return res.json();
    }
}