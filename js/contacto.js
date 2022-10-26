const $form = document.querySelector('#form')

$form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(this)
    $buttonMailto.setAttribute(
    'href', 
    `mailto:facundo.martinez.fms@gmail.com?subject=nombre 
    ${form.get('nombre y apellido')}  correo ${form.get('email')}
    &body=${form.get('message')}`)
    $buttonMailto.click()
}