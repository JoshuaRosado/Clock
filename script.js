setInterval(setClock, 1000)

let hourHand = document.querySelector('[data-hour]')
let minuteHand = document.querySelector('[data-minute]')
let secondHand = document.querySelector('[data-second]')

function setClock(){
    let currentDate = new Date()
    let secondsRatio = currentDate.getSeconds() / 60
    let minutesRatio =  (secondsRatio + currentDate.getMinutes()) / 60
    let hoursRatio = (minutesRatio + currentDate.getHours()) / 12
    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)
}


function setRotation(element, rotationRatio){
    element.style.setProperty('--rotation', rotationRatio * 360)
}


setClock()