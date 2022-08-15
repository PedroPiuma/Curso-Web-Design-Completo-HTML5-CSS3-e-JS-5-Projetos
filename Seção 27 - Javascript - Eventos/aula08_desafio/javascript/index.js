window.onload = () => {
    const hamburguer = document.querySelector('#btn')
    const html = document.querySelector('html')

    hamburguer.addEventListener('click', e => {
        const flag = html.classList.contains('menu-opened')
        return flag ? html.classList.remove('menu-opened') : html.classList.add('menu-opened')
    })
}