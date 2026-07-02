'use strict'


document.addEventListener("DOMContentLoaded", setup)



function setup() {
    console.log("frontend setup")


    document.querySelector(".form-send-message").addEventListener("submit", btnSendMessageHandler)
}


function fetchMessages() {
    //TODO call GET request once API endpt is developed to fetch recent live chat messages
}

function btnSendMessageHandler(e) {

    e.preventDefault()
    //TODO make a POST request once API endpoint is established
    const textarea = document.querySelector(".chat-input")

    console.log(textarea.value)

}


