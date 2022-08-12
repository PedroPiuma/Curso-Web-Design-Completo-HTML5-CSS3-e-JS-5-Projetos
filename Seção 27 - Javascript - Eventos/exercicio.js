window.onload = () => {

    const submit = event => {
        event.preventDefault()
        console.log(name.value)
        console.log(email.value)
        name.value === '' || email.value === '' ? alert('Inválido') : ''
    }

    const name = document.querySelector('#name');
    const email = document.querySelector('#email');
    const btn = document.querySelector('#btn')

    btn.addEventListener('click', e => submit(e))


}