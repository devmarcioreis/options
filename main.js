let body = document.querySelector('.container')
let dark = document.querySelector('#dark')

dark.onclick = () => {
    if(dark.checked == true) {
        body.classList.add('darkMode')
    } else {
        body.classList.remove('darkMode')
    }
}