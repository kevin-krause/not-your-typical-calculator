// variaveis
const container = document.querySelector('.container')
const numberInput = document.querySelector('#number-input')
const math = document.querySelector('#math')

// funcoes

const magic = () => {
    const a = numberInput.value
    console.log(a)
}

// eventos

container.style.setProperty('--x', `100px`)
container.style.setProperty('--y', `100px`)

document.addEventListener('mousemove', e => {
    mouseX = e.clientX
    mouseY = e.clientY

    container.style.setProperty('--x', `${mouseX}px`)
    container.style.setProperty('--y', `${mouseY}px`)
})
