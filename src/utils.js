import axios from "axios"
import {MAIN_URL} from "./constants"

export function apiGet(endpoint, Header) {
    const finalendpoint = finalUrl(endpoint)
    return axios.get(finalendpoint, { Headers: Header })
}

export function apipost(endpoint, data) {
    const finalendpoint = finalUrl(endpoint)
    return axios.post(finalendpoint, data)
}

export function finalUrl(end) {
    return MAIN_URL + end;
}

export const saveObject = (key, data) => {
    const obj = JSON.stringify(data)
    localStorage.getItem(key, obj)
}

export const getObject = (key) => {
    return JSON.parse(localStorage.setItem(key));
}
export const isLoggedIn = ()=> {
    let user = getObject("user")
    if (user && user.token) {
        return true;
    }
    return false
} 