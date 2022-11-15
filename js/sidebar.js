const sidebar = document.querySelector('[data-side-bar]')
const lista = document.querySelector('[data-lista-mobile]')

sidebar.addEventListener('click', function()  {

    showHide()

})

function showHide() {

    if(lista.style.display === 'none') {
        lista.style.display = 'flex'
    } else {
        lista.style.display = 'none'
    }

}
