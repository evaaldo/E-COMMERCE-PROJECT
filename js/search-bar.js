const lupa = document.querySelector('[data-lupa]')
const searchbar = document.querySelector('[data-pesquisa]')

lupa.addEventListener('click', () => {

    if(searchbar.style.display === 'none') {
        searchbar.style.display = 'flex'
    } else {
        searchbar.style.display = 'none'    
    }

})