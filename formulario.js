const $form = document.querySelector('#form')
$form.addEventListener('submit', handleSubmit)

async function handleSubmit(evento){
    evento.preventDefault()
    const form = new FormData(this)
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            'Accept': 'aplication/json'
        }
    })
    if(response.ok){
        this.reset()
        alert('Muchas gracias por contactarme, en cuanto pueda, me contactaré pronto con usted :)')
    }
}