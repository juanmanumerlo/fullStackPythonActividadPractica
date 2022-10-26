const $form = document.querySelector('#form')
const $buttonMailto = document.querySelector('#enviarMail')
const nombre = document.getElementById("name")
const email = document.getElementById("email")
const asunto = document.getElementById("asunto")
const parrafo = document.getElementById("warnings")

$form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
  event.preventDefault()
  const form = new FormData(this)
  $buttonMailto.setAttribute('href', `mailto:facundo.martinez.fms@gmail.com?subject=nombre ${form.get('nombre y apellido')}  correo ${form.get('email')}&body=${form.get('message')}`)
  $buttonMailto.click()


  form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""
    if(nombre.value.length <6){

        warnings += `El nombre no es demasiado corto <br>`
        entrar = true
    }
    if(!regexEmail.test(email.value)){
        warnings += `El email no es valido <br>`
        entrar = true
    }

    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Enviado"
    }
})
}