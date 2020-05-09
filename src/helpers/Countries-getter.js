export default class CountriesGetter {
    _base = 'https://countries.trevorblades.com';

    get = async (body) => {
        const res = await fetch(this._base, {
            "headers": {
                "accept": "*/*",
                "accept-language": "ru,en-US;q=0.9,en;q=0.8,uk;q=0.7",
                "cache-control": "no-cache",
                "content-type": "application/json",
                "pragma": "no-cache",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin"
            },
            "referrer": this._base,
            "referrerPolicy": "no-referrer-when-downgrade",
            "body": body,
            "method": "POST",
            "mode": "cors"
        });

        if (!res.ok) {
            throw new Error(`Could not fetch ${this._base}, received ${res.status}`);
        }

        return res.json();
    }
}