const openModal = document.querySelector('[data-carrinho]')
const closeModal = document.querySelector('[data-close]')
const modal = document.querySelector('[data-modal]')
const fade = document.querySelector('[data-fade]')

const toggleModal = () => {
    modal.classList.toggle('hide')
    fade.classList.toggle('hide')
}

[openModal, closeModal, fade].forEach((el) => {

    el.addEventListenner('click', () => toggleModal())

})

