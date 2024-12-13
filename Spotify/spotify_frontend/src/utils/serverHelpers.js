import {backendUrl} from "./config";
export const makeUnauthenticateedPOSTRequest = async (route, body) => {
    // route : / signup
    const response = await fetch(backendUrl + route, {
        method:"POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });
    const formattedResponse = await response.json();
    return formattedResponse;
}

export const makeAuthenticateedPOSTRequest = async (route, body) => {
    const token = getToken();
    const response = await fetch(backendUrl + route, {
        method:"POST",
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(body),
    });
    const formattedResponse = await response.json();
    return formattedResponse;
}

export const makeAuthenticateedGETRequest = async (route) => {
    const token = getToken();
    const response = await fetch(backendUrl + route, {
        method:"GET",
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
    });
    const formattedResponse = await response.json();
    return formattedResponse;
}

const getToken = () => {
    const accessToken = document.cookie.replace(
        /(?:(?:^|.*;\s*)token\s*=\s*([^:]*).*$)|^.*$/,
        "$1"
    );
    return accessToken;
};