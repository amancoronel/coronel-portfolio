import axios from "axios";

axios.defaults.withCredentials = true;

export default axios.create({
    baseURL: 'https://cms-api-ts.herokuapp.com/api/',
    header: {
        "Content-Type": "application/json"
    }
})