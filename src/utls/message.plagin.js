import message from './message'

export default function error(id, formError) {
    const error = document.querySelector(id)
    let p = document.createElement('p')
    error.insertAdjacentElement('afterbegin', p)
    p.style.position = 'absolute'
    p.style.width = '400px'
    p.style.top = '-64px'
    p.style.left = '211px'
    p.style.color = '#fff'
    p.textContent = message[formError]
    setTimeout(() => {
        error.innerHTML = ''
    },2000) 
}