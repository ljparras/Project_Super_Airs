/* let btn_pilotos = document.getElementById('pilotos')

btn_pilotos.addEventListener('click', ()=>{
    let seccion_pilotos = document.querySelector('.filtros', '.tabla2')
    let seccion_tabla_resumen = document.querySelector('.tabla')

    seccion_pilotos.style.display = 'block'
    //seccion_pilotos.style.background-color: #000
    seccion_tabla_resumen.style.display = 'none'
}) */

let btn_agregar = document.getElementById('agregar')

btn_agregar.addEventListener('click', () =>{
    let seccion_registro = document.querySelector('.contenido-form')
    let seccion_tabla2 = document.querySelector('.tabla2')



    seccion_registro.style.display = 'block'
    seccion_tabla2.style.display = 'none'
})

function validacion(){

    let nombre = document.getElementById(nombre)
    let apellido = document.getElementById(apellido)
    let cedula = document.getElementById(cedula)
    let telefono = document.getElementById(telefono)
    let direccion = document.getElementById(direccion)
    let correo = document.getElementById(correo)
    let pass = document.getElementById(pass)
    let id = document.getElementById(identi)

    if (nombre.length < 3) {alert('El campo nombre es obligatorio'); return false}
    if (apellido.length < 3) {alert('El campo apellido es obligatorio'); return false}
    if (cedula.length < 6) {alert('El campo cedula es obligatorio'); return false}
    if (telefono.length < 10) {alert('El campo telefono es obligatorio'); return false}
    if (direccion.length < 3) {alert('El campo dirección es obligatorio'); return false}
    if (correo.length < 7) {alert('El campo correo es obligatorio'); return false}

    return false
}