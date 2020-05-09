export default class CountriesGetter {
    _base = 'https://countries.trevorblades.com';

    get = async (url = this._base) => {
        const res = await fetch(url, {
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
            "referrer": "https://countries.trevorblades.com/",
            "referrerPolicy": "no-referrer-when-downgrade",
            "body": "{\"operationName\":null,\"variables\":{},\"query\":\"{\\n  continents {\\n    code\\n    name\\n    countries {\\n      code\\n      name\\n      languages {\\n        code\\n        name\\n      }\\n    }\\n  }\\n}\\n\"}",
            "method": "POST",
            "mode": "cors"
        });

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`);
        }

        return res.json();
    }
}