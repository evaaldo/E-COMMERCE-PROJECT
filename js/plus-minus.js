const quantidade = document.getElementById('compre__conosco-carrinho')

function stepper(btn) {

    let id = btn.getAttribute('id')
    let min = quantidade.getAttribute('min')
    let max = quantidade.getAttribute('max')
    let step = quantidade.getAttribute('step')
    let val = quantidade.getAttribute('value')
    let calcStep = (id == "increment") ? (step*1) :
    (step * -1)
    let newValue = parseInt(val) + calcStep

    if(newValue >= min && newValue <= max) {

        quantidade.setAttribute('value', newValue)

    }

    console.log(id,min,max,step,val)

}