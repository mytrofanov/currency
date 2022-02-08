import axios from "axios";



const instance = axios.create({
    withCredentials: false,
    baseURL: `https://api.exchangerate.host/`
})
export const currencyAPI = {
    convert() {
        return instance.get<any>(`convert?from=USD&to=EUR`)
            .then(response => {
                console.log('from API: ',response)
                console.log('from API rate: ',response.data.info)
                console.log('from API rate: ',response.data.info)
                console.log('from API rate: ',response.data.result)
            });
    },
    currency() {
        return instance.get<any>(`latest`)
            .then(response => {
                console.log('currencyAPI.currency(): ',response)
                console.log('base currensy: ',response.data.base)
                console.log('rates: ',response.data.rates)
                return response.data
            });
    },

}

// let requestURL = 'https://api.exchangerate.host/convert?from=USD&to=EUR';
// let request = new XMLHttpRequest();
// request.open('GET', requestURL);
// request.responseType = 'json';
// request.send();
//
// request.onload = function() {
//     let response = request.response;
//     console.log(response);
// }