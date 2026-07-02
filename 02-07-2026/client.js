'use strict'


document.addEventListener("DOMContentLoaded", setup)



function setup() {
    console.log("frontend setup")



    document.querySelector(".fetch").addEventListener("click", saySomething)
}


function saySomething() {
    console.log("Will fetch eventually")
}



