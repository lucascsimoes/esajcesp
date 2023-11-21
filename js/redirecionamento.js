
/* ||||||||||||||||||||||||||||| */
/* ||||| MARGIN NO FOOTER |||||| */
/* ||||||||||||||||||||||||||||| */

let footerHeight = document.getElementsByTagName('footer')[0].offsetHeight
document.body.style.marginBottom = footerHeight + "px"

/* ||||||||||||||||||||||||||||| */
/* || MUDAR BACKGROUND IMAGE ||| */
/* ||||||||||||||||||||||||||||| */

let background = document.querySelector(':root')

if (window.screen.width < 820) {
    background.style.setProperty('--background-image', 'url("../images/logo-small-device.png")')
} else {
    background.style.setProperty('--background-image', 'url("../images/logo-large-device.png")')
}