'use strict'

/* ||||||||||||||||||||||||||||| */
/* ||||| MARGIN NO FOOTER |||||| */
/* ||||||||||||||||||||||||||||| */

let footerHeight = document.getElementsByTagName('footer')[0].offsetHeight
document.body.style.marginBottom = footerHeight + "px"

/* ||||||||||||||||||||||||||||| */
/* ||||||||| CRONÔMETRO |||||||| */
/* ||||||||||||||||||||||||||||| */

// FORMATO - MÊS/DIA/ANO
const edital = "5/10/2022"

function cronometro() {

    const currentDate = new Date().getTime()
    const editalDate = new Date(edital).getTime()

    if (currentDate > editalDate) {
        window.location.href = "./inscricao.html"
    }

    let delta = Math.abs(editalDate - currentDate)/1000
    let days = Math.floor(delta/86400)
    delta -= days * 86400

    let hours = Math.floor(delta/3600)
    delta -= hours * 3600

    let minutes = Math.floor(delta/60)
    delta -= minutes * 60

    let seconds = delta % 60

    let differenceDays = document.getElementsByTagName("h1")[0]
    let differenceHours = document.getElementsByTagName("h1")[1]
    let differenceMinutes = document.getElementsByTagName("h1")[2]
    let differenceSeconds = document.getElementsByTagName("h1")[3]

    let stringSeconds = String(seconds).substring(0,2)
    let stringMinutes = String(minutes)
    let stringHours = String(hours)
    let stringDays = String(days)

    if (stringSeconds[1] === ".") {
        stringSeconds = "0" + stringSeconds[0]
    } else {
        stringSeconds
    }

    if (minutes < 10) {
        stringMinutes = "0" + stringMinutes[0]
    } else {
        stringMinutes
    }

    if (hours < 10) {
        stringHours = "0" + stringHours[0]
    } else {
        stringHours
    }

    if (days < 10) {
        stringDays = "0" + stringDays[0]
    } else {
        stringDays
    }

    if (days === 0) {
        differenceDays.parentElement.style.display = "none"
    }

    differenceDays.innerHTML = stringDays
    differenceHours.innerHTML = stringHours
    differenceMinutes.innerHTML = stringMinutes
    differenceSeconds.innerHTML = stringSeconds

    if (delta === 0) {
        window.location.href = "./inscricao.html"
    }
}

setInterval("cronometro()", 1000)

/* ||||||||||||||||||||||||||||| */
/* ||||||| DATA C/ SEMANA |||||| */
/* ||||||||||||||||||||||||||||| */

let date = new Date(edital)
let year = date.getFullYear()
let listMonths = Array("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro")
let month = listMonths[date.getMonth()]
let day = date.getDate()
let listWeekdays = Array('Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado')
let weekday = listWeekdays[date.getDay()]

document.getElementsByTagName("p")[4].innerHTML = 
`O Edital de inscrição estará diponível a partir de <br> 
${weekday}, ${day} de ${month} de ${year}`

/* ||||||||||||||||||||||||||||| */
/* || MUDAR BACKGROUND IMAGE ||| */
/* ||||||||||||||||||||||||||||| */

let background = document.querySelector(':root')

if (window.screen.width < 820) {
    background.style.setProperty('--background-image', 'url("../images/logo-small-device.png")')
} else {
    background.style.setProperty('--background-image', 'url("../images/logo-large-device.png")')
}
