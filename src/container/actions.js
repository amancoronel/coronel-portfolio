import axios from "axios";

axios.defaults.withCredentials = true;
const sendEmail = (form) => {
    axios.post("http://localhost:6969/api/addEmail", form)
    .then((response) => {
        console.log("response", response);
    }).catch((e) => {
        console.log("error", e);
    });
}

export {
    sendEmail
}