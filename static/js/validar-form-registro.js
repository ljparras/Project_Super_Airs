function requisitospass (parametro){
    patron = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/;
if (patron.test(parametro)){
return true;
}
else{
    return  false;
}
}
function validarlongcaracteres(parametro){
if(parametro.length < 5){
return false;
}
else{
    return true;
}
}
function validarespacios(parametro){
var patron = /^\s+$/;
if (patron.test(parametro)){
return false;
}
else {
return true;
}
}


function validarcorreo(parametro){
patron = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
if(patron.test(parametro)){
    
    return true; 
}
else{
    return false; 
}
}
function validarnumero(parametro){
if(!/^([0-9])*$/.test(parametro)){
  return false; 
}
else{
    return true; 
}
}


function validadtexto(parametro){
    //Expresion regular 
var patron = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]*$/;
if(parametro.search(patron)){
    return false;
}
else{
    return true;
}
}
function validarFormulario(){
   

    var formulario = document.addForm;
    if (formulario.txt_nombre.value =="" || validarespacios(formulario.txt_nombre.value) == false){
        //alert("Por favor ingrese su nombre");
        //aca nos insrta la alerta o mensaje en el div alerta
        //Validacion caja txt nombre
        document.getElementById("alerta").innerHTML= '<div class="alert alert-danger"> <a href="" class="close" data-bs-dismiss="alert">&times;</a>Ingrese un nombre.</div>';
        formulario.txt_nombre.value ="";
        formulario.txt_nombre.focus();
        return false;
        //validacion solo texto 
    }else if (validadtexto(formulario.txt_nombre.value) == false){
        document.getElementById("alerta").innerHTML= '<div class="alert alert-danger"> <a href="" class="close" data-bs-dismiss="alert">&times;</a>No se permiten numeros en el nombre.</div>';
        formulario.txt_nombre.value ="";
        formulario.txt_nombre.focus();
        return false;  
    } //Validacion longitud del nombre
    else if (validarlongcaracteres(formulario.txt_nombre.value) == false){
        document.getElementById("alerta").innerHTML= '<div class="alert alert-danger"> <a href="" class="close" data-bs-dismiss="alert">&times;</a>El nombre no es valido.</div>';
        formulario.txt_nombre.focus();
        return false; 
    }

    else{
       document.getElementById("alerta").innerHTML=""; 
    }
    
    //Validacion caja txt apellido
    if (formulario.txt_apellido.value =="" || validarespacios(formulario.txt_apellido.value)== false){
     
        document.getElementById("alerta").innerHTML= '<div class="alert alert-danger"> <a href="" class="close" data-bs-dismiss="alert">&times;</a>Ingrese Apellido.</div>';
        formulario.txt_apellido.value ="";
        formulario.txt_apellido.focus();
        return false;
    }//validacion solo texto  apellido
    else if (validadtexto(formulario.txt_apellido.value) == false){
            document.getElementById("alerta").innerHTML= '<div class="alert alert-danger"> <a href="" class="close" data-bs-dismiss="alert">&times;</a>No se permiten numeros en el apellido.</div>';
            formulario.txt_apellido.value ="";
            formulario.txt_apellido.focus();
            return false;  
        } 
    //Validacion longitud apellido
    else if (validarlongcaracteres(formulario.txt_apellido.value) == false){
        document.getElementById("alerta").innerHTML= '<div class="alert alert-danger"> <a href="" class="close" data-bs-dismiss="alert">&times;</a>El apellido no es valido.</div>';
        formulario.txt_apellido.value.focus();
        return false; 
    }

    else{
       document.getElementById("alerta").innerHTML=""; 
    }
    

    //Validacion caja txt Cedula
    if (formulario.txt_cedula.value =="" || validarespacios(formulario.txt_cedula.value)== false){
     
        document.getElementById("alerta").innerHTML= '<div class="alert alert-danger"> <a href="" class="close" data-bs-dismiss="alert">&times;</a>Ingrese Cédula.</div>';
        formulario.txt_cedula.value = "";
        formulario.txt_cedula.focus();
        return false;
    }//Validacion caja txt solo numeros
    else if (validarnumero(formulario.txt_cedula.value)== false){
    document.getElementById("alerta").innerHTML= '<div class="alert alert-danger"> <a href="" class="close" data-bs-dismiss="alert">&times;</a>Numero de ID no es valido. No se permite (.) ni letras.</div>';
    formulario.txt_cedula.value ="";
    formulario.txt_cedula.focus();
    return false;  
    }
    
    else{
       document.getElementById("alerta").innerHTML=""; 
    }
    //Validacion caja txt Telefono
    if (formulario.txt_telefono.value =="" || validarespacios(formulario.txt_telefono.value) == false){
     
    document.getElementById("alerta").innerHTML= '<div class="alert alert-danger"> <a href="" class="close" data-bs-dismiss="alert">&times;</a>Ingrese un Teléfono.</div>';
    formulario.txt_telefono.value = "";   
    formulario.txt_telefono.focus();
        return false;
    }//Validacion caja txt solo numeros
    else if (validarnumero(formulario.txt_telefono.value)== false){
        document.getElementById("alerta").innerHTML= '<div class="alert alert-danger"> <a href="" class="close" data-bs-dismiss="alert">&times;</a>Número de teléfono no valido.</div>';
        formulario.txt_telefono.value ="";
        formulario.txt_telefono.focus();
        return false;  
        }
    else{
       document.getElementById("alerta").innerHTML=""; 
    }
     //Validacion caja txt Direccion
     if (formulario.txt_direccion.value =="" || validarespacios(formulario.txt_direccion.value) == false){
     
        document.getElementById("alerta").innerHTML= '<div class="alert alert-danger"> <a href="" class="close" data-bs-dismiss="alert">&times;</a>Ingrese una Dirección.</div>';
        formulario.txt_direccion.value = "";  
        formulario.txt_direccion.focus();
            return false;
        }//Validacion longitud Direccion
        else if (validarlongcaracteres(formulario.txt_direccion.value) == false){
            document.getElementById("alerta").innerHTML= '<div class="alert alert-danger"> <a href="" class="close" data-bs-dismiss="alert">&times;</a>La direccion no es valida.</div>';
            formulario.txt_direccion.value.focus();
            return false; 
        }
        else{
           document.getElementById("alerta").innerHTML=""; 
        }
        //Validacion caja txt Correo
        if (formulario.txt_correo.value =="" || validarespacios(formulario.txt_correo.value) == false){
     
            document.getElementById("alerta").innerHTML= '<div class="alert alert-danger"> <a href="" class="close" data-bs-dismiss="alert">&times;</a>Ingrese un Correo.</div>';
            formulario.txt_correo.value = "";    
            formulario.txt_correo.focus();
                return false;
            }//Validacion caja txt simbolos
            else if (validarcorreo(formulario.txt_correo.value)== false){
                document.getElementById("alerta").innerHTML= '<div class="alert alert-danger"> <a href="" class="close" data-bs-dismiss="alert">&times;</a>Correo no valido</div>';
                formulario.txt_correo.value ="";
                formulario.txt_correo.focus();
                return false;  
                }
            else{
               document.getElementById("alerta").innerHTML=""; 
            }
            //Validacion contraseña requisitos 
            if (requisitospass(formulario.txt_pass.value)== false){
                document.getElementById("alerta").innerHTML= '<div class="alert alert-danger"> <a href="" class="close" data-bs-dismiss="alert">&times;</a>La contraseña debe tener  entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula, al menos una mayúscula y al menos un carácter no alfanumérico.</div>';
                
                formulario.txt_pass.focus();
                return true;  
                }
                //Validacion caja pass y pass confirmacion
            else if(formulario.txt_pass.value != formulario.txt_passconfir.value){
                    document.getElementById("alerta").innerHTML= '<div class="alert alert-danger"> <a href="" class="close" data-bs-dismiss="alert">&times;</a>Las contraseñas no coinsiden</div>';   
                   
                    return false; 
                }
             else{
             document.getElementById("alerta").innerHTML=""; 
            } 
    formulario.submit();
}
document.getElementById('guardar_perfil').style.display = "none";
function activarEditPerfil(){
    document.getElementById('nombre' ).disabled = false
    document.getElementById('apellido').disabled = false
    document.getElementById('cedula').disabled = false
    document.getElementById('telefono').disabled = false
    document.getElementById('direccion').disabled = false
    document.getElementById('email').disabled = false
    document.getElementById('guardar_perfil').style.display = "block";
    document.getElementById('editar_perfil').style.display = "none";
    
}

function validarlogin(){
    var User =  document.getElementById('usuariologin').value
    var userpass =  document.getElementById('passlogin').value
    
    console.log(User)
}
