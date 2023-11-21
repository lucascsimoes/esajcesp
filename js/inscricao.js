'use strict'

/* ||||||||||||||||||||||||||||| */
/* ||||||||| VARIÁVEIS ||||||||| */
/* ||||||||||||||||||||||||||||| */

let footerHeight = document.getElementsByTagName('footer')[0].offsetHeight
document.getElementsByTagName('body')[0].style.marginBottom = footerHeight + "px"

let state = 0
let progressComplete = document.getElementsByClassName('complete-progress')[0]
let submitButton = document.getElementsByTagName('input')[7]

let section = document.getElementsByClassName('section')

let formInputs = document.getElementsByTagName('input')
let formError = document.getElementsByClassName('error-text')

section[state].style.display = "flex"
progressComplete.style.width = "33%"

var firstInput = 0
var secondInput =  1

console.log(document.getElementsByClassName("captcha")[0].children[0].innerHTML)
console.log(section[2].children[4].children[1].value)

/* ||||||||||||||||||||||||||||| */
/* ||| RETIRAR ERRO ON CHANGE || */
/* ||||||||||||||||||||||||||||| */

function validateInput() {

    formInputs[firstInput].className === "input-error" && formInputs[firstInput].value != "" ?
        (formInputs[firstInput].classList.remove('input-error'), formError[firstInput].style.display = "none") : null
    formInputs[secondInput].className === "input-error" && formInputs[secondInput].value != "" ?
    (formInputs[secondInput].classList.remove('input-error'), formError[secondInput].style.display = "none") : null

    if (secondInput === 5) {
        let thirdInput = 6
        formInputs[thirdInput].className === "input-error" && formInputs[thirdInput].value != "" ?
        (formInputs[thirdInput].classList.remove('input-error'), formError[thirdInput].style.display = "none") : null

    }
}

/* |||||||||||||||||||||||||||||| */
/* | SEÇÃO DE INPUT E VALIDAÇÃO | */
/* |||||||||||||||||||||||||||||| */

let CPFinput = section[state].children[0].children[1]
let NAMEinput = section[state].children[2].children[1] 

document.getElementsByClassName("back-button")[0].style.opacity = "0"

function progressSections() {

//  --------------------- PRIMEIRA SEÇÃO ---------------------

    if (state === 0) {

        let CPFinput = section[state].children[0].children[1]
        let NAMEinput = section[state].children[2].children[1]

        if (CPFinput.value === "") {
            CPFinput.classList.add('input-error')
            formError[0].style.display = "flex"
        } else if (CPFinput.value.length < 14) {
            CPFinput.classList.add('input-error')
            formError[0].style.display = "flex"
            formError[0].children[1].innerHTML = "CPF inválido! Digite seu CPF completo."
        }

        if (NAMEinput.value === "") {
            NAMEinput.classList.add('input-error')
            formError[1].style.display = "flex"
        }

        document.getElementsByClassName('input-error').length === 0 ? 
        (

            section[state].style.animation = "moveout 1s forwards",
            setTimeout(() => {
                section[state].style.display = "none"
            }, 800),
            
            setTimeout(() => {
                state++,
                section[state].style.animation = "movein 1s forwards",
                section[state].style.display = "flex"
            }, 800),

            progressComplete.style.width = "66%",
            firstInput +=2,
            secondInput +=2,

            document.getElementsByClassName("back-button")[0].style.opacity = "1"
        
        ) : null

//  --------------------- SEGUNDA SEÇÃO ---------------------

    } else if (state === 1) {
        
        let DATEBORNinput = section[state].children[0].children[1]
        let PHONEinput = section[state].children[2].children[1]
        let currentProgress = document.getElementsByClassName("complete-progress")[0]

        if (DATEBORNinput.value === "") {
            DATEBORNinput.classList.add('input-error')
            formError[2].style.display = "flex"
        } else if (DATEBORNinput.value.length < 10) {
            DATEBORNinput.classList.add('input-error')
            formError[2].style.display = "flex"
            formError[2].children[1].innerHTML = "Data inválida! Digite a data completa."
        }

        if (PHONEinput.value === "") {
            PHONEinput.classList.add('input-error')
            formError[3].style.display = "flex"
        } else if (PHONEinput.value.length < 15) {
            PHONEinput.classList.add('input-error')
            formError[3].style.display = "flex"
            formError[3].children[1].innerHTML = "Telefone inválido! Digite o telefone completo."
        }

        document.getElementsByClassName('input-error').length === 0 ? 
        (

            section[state].style.animation = "moveout 1s forwards",
            setTimeout(() => {
                section[state].style.display = "none"
            }, 800),
            
            setTimeout(() => {
                state++,
                section[state].style.animation = "movein 1s forwards",
                section[state].style.display = "flex"
            }, 800),

            progressComplete.style.width = "100%",
            firstInput +=2,
            secondInput +=2,

            currentProgress.style.borderRadius = "0px"
        
        ) : null

//  --------------------- TERCEIRA SEÇÃO ---------------------

    } else if (state === 2) {
        
        let EMAILinput = section[state].children[0].children[1]
        let CONFIRMEMAILinput = section[state].children[2].children[1]
        let CAPTCHAinput = section[state].children[4].children[1]

        
        

        if (EMAILinput.value === "") {
            EMAILinput.classList.add('input-error')
            formError[4].style.display = "flex"
        }

        if (CONFIRMEMAILinput.value === "") {
            CONFIRMEMAILinput.classList.add('input-error')
            formError[5].style.display = "flex"
        }

        if (EMAILinput.value != CONFIRMEMAILinput.value) {
            EMAILinput.classList.add('input-error')

            CONFIRMEMAILinput.classList.add('input-error')
            formError[5].style.display = "flex"
            formError[5].children[1].innerHTML = "Os e-mails devem coincidir."
        }

        if (CAPTCHAinput.value === "") {
            CAPTCHAinput.classList.add('input-error')
            formError[6].style.display = "flex"
        } else if (CAPTCHAinput.value != JSON.parse(document.getElementsByClassName("captcha")[0].children[0].innerHTML)) {
            CAPTCHAinput.classList.add('input-error')
            formError[6].style.display = "flex"
            formError[6].children[1].innerHTML = "Captcha inválido! Tente novamente"
        }  
        

//  --------------------- IR P/ CONFIRMAÇÃO ---------------------

        document.getElementsByClassName('input-error').length === 0 ? 
        submitButton.type = "submit" : null

    }

}

/* ||||||||||||||||||||||||||||| */
/* ||||||||| CRONÔMETRO |||||||| */
/* ||||||||||||||||||||||||||||| */

const edital = "5/10/2022"

function cronometro() {

    const currentDate = new Date().getTime()
    const editalDate = new Date(edital).getTime()

    if (currentDate > editalDate) {
        window.location.href = "./redirecionamento.html"
    }

    let delta = Math.abs(editalDate - currentDate)/1000
    let days = Math.floor(delta/86400)
    delta -= days * 86400

    let hours = Math.floor(delta/3600)
    delta -= hours * 3600

    let minutes = Math.floor(delta/60)
    delta -= minutes * 60

    let seconds = delta % 60

    let differenceDays = document.getElementsByTagName("span")[1]
    let differenceHours = document.getElementsByTagName("span")[2]
    let differenceMinutes = document.getElementsByTagName("span")[3]
    let differenceSeconds = document.getElementsByTagName("span")[4]

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

    if (minutes === 0) {
        differenceMinutes.style.display = "none"
    } else if (hours === 0) {
        differenceHours.style.display = "none"
    } else if (days === 0) {
        differenceDays.style.display = "none"
    }

    differenceDays.innerHTML = stringDays + " dias,"
    differenceHours.innerHTML = stringHours + " horas,"
    differenceMinutes.innerHTML = stringMinutes + " minutos,"
    differenceSeconds.innerHTML = stringSeconds + " segundos."

    if (delta === 0) {
        window.location.href = "./redirecionamento.html"
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

document.getElementsByTagName("span")[0].innerHTML = 
` ${weekday}, ${day} de ${month} de ${year}`

/* ||||||||||||||||||||||||||||| */
/* ||||| MÁSCARAS DE INPUT ||||| */
/* ||||||||||||||||||||||||||||| */

let $CPFinput = $('#CPF')
$CPFinput.mask('000.000.000-00', {reverse: false})

let $DATEinput = $('#DATE')
$DATEinput.mask('00/00/0000', {reverse: false})

let $PHONEinput = $('#PHONE')
$PHONEinput.mask('(00) 00000-0000', {reverse: false})

/* ||||||||||||||||||||||||||||| */
/* ||||| MUDAR BACKGROUND |||||| */
/* ||||||||||||||||||||||||||||| */

let background = document.querySelector(':root')

if (window.screen.width < 820) {
    background.style.setProperty('--background-image', 'url("../images/logo-small-device.png")')
} else {
    background.style.setProperty('--background-image', 'url("../images/logo-large-device.png")')
}

/* ||||||||||||||||||||||||||||| */
/* ||||||| VOLTAR SEÇÃO |||||||| */
/* ||||||||||||||||||||||||||||| */

function goBack() {

    section[state].style.animation = "moveout 1s forwards",
    setTimeout(() => {
        section[state].style.display = "none"
    }, 800)

    setTimeout(() => {
        state--,
        section[state].style.animation = "movein 1s forwards",
        section[state].style.display = "flex"
    }, 800)

    if (state === 1) {
        progressComplete.style.width = "33%"
        document.getElementsByClassName("back-button")[0].style.opacity = "0"
        firstInput -=2
        secondInput -=2
    } else {
        progressComplete.style.width = "66%"
        document.getElementsByClassName("back-button")[0].style.opacity = "1"
        firstInput -=2
        secondInput -=2
    }
}








