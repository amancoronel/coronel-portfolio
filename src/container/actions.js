import api from '../api/sendEmail';
const sendEmail = (form) => {
    api.post("/addEmail", form)
    .then((response) => {
        console.log("response", response);
    }).catch((e) => {
        console.log("error", e);
    });
}

export {
    sendEmail
}