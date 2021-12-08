import requests from "../utils/requests/index.js"

const getOption = (template) => {
    console.log("getOption")
    return requests({
        url: "/options",
        method: "get",
        params: { 'template': template}
    })
}


const getAllOptions = () => {
    console.log("getAllOptions")
    return requests({
        url: "/available_templates",
        method: "get",
    })
}


// deprecated
const doGenerte = (template, options) => {
    console.log("doGenerte")
    return requests({
        url: "/generate?template=" + template,
        method: "get",
        data: options
    })
}



export {
    getOption,
    getAllOptions,
    doGenerte
}
