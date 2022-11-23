const openModal = document.querySelector('[data-carrinho]')
const closeModal = document.querySelector('[data-close]')
const modal = document.querySelector('[data-modal]')
const fade = document.querySelector('[data-fade]')

const quantidade = document.getElementById('compre__conosco-carrinho')
const mensagemCompra = document.getElementById('mensagem-compra')
const adicionarCarrinho = document.getElementById('adicionar-carrinho')

const toggleModal = () => {

    [modal, fade].forEach((el) => el.classList.toggle('hides'))
}

[openModal, closeModal, fade].forEach((el) => {

    el.addEventListener('click', () => toggleModal())

})

adicionarCarrinho.addEventListener('click', () => {

    mensagemCompra.innerHTML = `
    <a id="mensagem-compra" href="https://wa.me/5585998500745?text=Olá, eu gostaria de comprar ${quantidade.value} polaroids de" target="_blank">
        <button class="compre-conosco__adicionar comprar"><i class="fa-solid fa-sack-dollar"></i> Comprar</button>
    </a>
    `

})
