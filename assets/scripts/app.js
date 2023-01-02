const radio = document.querySelectorAll('.box-radio > input')
const labelForRadio = document.querySelectorAll('.feedback-card .box-label label')
const dataSubmit = document.querySelectorAll('[data-feedback="submit"]')
const dataThanks = document.querySelectorAll('[data-feedback="thank-you"')
const form = document.querySelector('.feedback-form')
const item = sessionStorage.getItem('feedback')
const small = document.querySelector('.small')

dataSubmit.forEach((data) => {
    data.classList.add('active')
})

form.addEventListener('submit', (event) => {
    event.preventDefault()
    toggleDataFeedback(radio)
})

selectedLabel(labelForRadio)

function selectedLabel(labelGroup) {
    labelGroup.forEach((label) => {
        label.addEventListener('click', () => {
            removeSelected(labelForRadio)
            label.classList.add('selected-radio-feedback')
        })
    })
}

function removeSelected(labelForRadio) {
    labelForRadio.forEach((label) => {
        label.classList.remove('selected-radio-feedback')
    })
}

function toggleDataFeedback(input) {
    input.forEach((input) => {
        if (input.checked == true) {
            dataSubmit.forEach((data) => {
                data.classList.remove('active')
            })
            dataThanks.forEach((data) => {
                data.classList.add('active')
                selected(input.value)
            })
        } else {
            return;
        }
    })
}

function selected(value){
    small.innerText = `You selected ${value} out of 5`
}


