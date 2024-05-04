document.addEventListener('DOMContentLoaded', () =>{

 
  
  
  
   
  /****************************** para registrar usuario ************************************************ */
  

  let botonEnvioReg = document.querySelector("#btn-reg-user");
  let inputNombre = document.querySelector("#nombre");
  let inputApellido = document.querySelector("#apellido");
  let inputEmail =document.querySelector('#email');
  let inputClave = document.querySelector("#password");
  let inputFechaNac = document.querySelector("#fechaNacimiento");
  let inputPais = document.querySelector("#pais");
  let inputTerminos= document.querySelector("#terminos");

  let registerForm = document.querySelector(".form-register");
 
    botonEnvioReg.addEventListener('click', function(e){
              e.preventDefault();
           
           
              let texto = "";
              let errorNombre = true;
              let errorApellido = true;
              let errorMail = true;
              let errorClave = true;
              let errorFecha =true;
              let errorPais = true;
              let errorTerminos = true;

             // Encuentra el elemento padre del campo de entrada
             let formControl = inputNombre.closest('div');
            if(inputNombre.value.length == 0){

            texto =  "El nombre es obligatorio";  
                }
            else if(inputNombre.value.length < 4){
              texto = "El nombre debe tener mas de 3 caracteres";
              errorNombre = true;
             }
             else  {
                texto = "";
                errorNombre = false;
             }
             // Encuentra el elemento de texto de error dentro del elemento padre
             let errorText = formControl.querySelector('.error-text');
             // Establece el texto del mensaje de error
             errorText.innerText = texto;

             //-----------------------------------------------------------------------------
              formControl = inputApellido.closest('div');
              if (inputApellido.value.length == 0){
                texto = "El apellido es obligatorio";
                errorApellido = true;
              }
              else  {
                texto = "";
                errorApellido = false;
             }
              errorText = formControl.querySelector('.error-text');
              errorText.innerText = texto;

              //----------------------------------------------------------------------------
              formControl = inputEmail.closest('div');
               if (inputEmail.value.length == 0){
                texto = "El email es obligatorio";
                errorMail = true;
              }
              else if(isEmail(inputEmail)){
                
                texto = "El correo electrónico no es válido";
                errorMail = true ;
                } 
                else  {
                  texto = "";
                  errorMail = false;
               }
                errorText = formControl.querySelector('.error-text');
                errorText.innerText = texto;
  

               //-----------------------------------------------------------------------------
                formControl = inputClave.closest('div');
              if (inputClave.value.length == 0){          
                texto = "Coloque su contraseña";
                errorClave = true;
              }
              else  {
                texto = "";
                errorClave = false;
             }
              errorText = formControl.querySelector('.error-text');
              errorText.innerText = texto;

             //--------------------------------------------------------------------------------
              formControl = inputFechaNac.closest('div');
              if (!inputFechaNac.value ){
               texto = "Ingrese su fecha de nacimiento";
                errorFecha = true;
              }
              else  {
                texto = "";
                errorFecha = false;
             }
              errorText = formControl.querySelector('.error-text');
              errorText.innerText = texto;

             //--------------------------------------------------------------------------------
              formControl = inputPais.closest('div');
              if (!inputPais.value){
                texto= "Seleccione su pais de nacimiento";
                errorPais = true;
              }
              else  {
                texto = "";
                errorPais = false;
             }
              errorText = formControl.querySelector('.error-text');
              errorText.innerText = texto;


             //--------------------------------------------------------------------------------------------
              formControl = inputTerminos.closest('div');
              if (!inputTerminos.checked) {
                texto = "Debes aceptar los términos y condiciones";
                errorTerminos = true;
              } 
              else  {
                texto = "";
                errorTerminos = false;
             }
              errorText = formControl.querySelector('.error-text');
              errorText.innerText = texto;

              
              if (errorApellido || errorClave || errorFecha || errorMail || errorNombre || errorPais || errorTerminos) {
                // se reproduce mensaje
               const mensaje = new SpeechSynthesisUtterance();
                mensaje.text = "completa todos los datos correctamente, por favor";           
                speechSynthesis.speak(mensaje);
               
                console.log("hay errores");
              }
              else {
              //registerForm.submit();
              alert("Se enviaron los datos de registro");
              registerForm.reset();

              }         
})
              // Función para validar si una cadena es una dirección de correo electrónico válida
              const isEmail = (email) => {
                // Expresión regular para validar el formato de correo electrónico
                const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                // Verifica si el correo electrónico cumple con el formato
                return re.test(email);
                }

})
                  
        
    
        






  
