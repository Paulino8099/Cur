// Todas las Variables
var boton_modo_noche = document.getElementById("modo_noche");

var body = document.getElementById("body"); //
var caja_estudios = document.getElementById("caja_estudios"); //Cajón de Estudios
var boton_noche = document.getElementById("interruptor_off"); 
var imagen_navegador_fondo = document.getElementById("navegador");
var cajon_contactos = document.getElementById("contactos"); //Cajón de los Contactos
var titulo_contactos = document.getElementById("titulo_contactos"); //Titulo de Estudios
var txt_facebook = document.getElementById("txt_facebook"); 
var txt__whatsapp = document.getElementById("txt__whatsapp"); //
var txt_twitter = document.getElementById("txt_twitter");
var txt_instagram = document.getElementById("txt_instagram");
var infotep__btn = document.getElementById("infotep__btn");
var ventanaFlotante_infotep = document.getElementById("ventanaFlotante_infotep") //Ventana Flotante del Cajón de infotep
var btn_salir_ventanaFlotante_infotep = document.getElementById("btn_salir_ventanaFlotante_infotep") //Botón Salir de Ventana Flotante de Infotep
var btn_3puntos = document.getElementById("btn_3puntos"); //Botón de 3 Puntos Dispositivos Móviles
var menu_navegador = document.getElementById("menu_navegador"); //Menú del Navegador

modo_noche.addEventListener("click", function() {
  txt_facebook.classList.toggle("dark_mode_letras");
  txt_instagram.classList.toggle("dark_mode_letras");
  txt_twitter.classList.toggle("dark_mode_letras");
  txt__whatsapp.classList.toggle("dark_mode_letras");
  
  boton_modo_noche.classList.toggle("dark_mode_boton");
  caja_estudios.classList.toggle("dark_mode_sombra"); //Cajón de Estudios
  boton_noche.classList.toggle("interruptor_on");
  imagen_navegador_fondo.classList.toggle("navegador_dark_mode"); //Imágen del Navegador
  cajon_contactos.classList.toggle("dark_mode_sombra"); //Cajón de los Contactos
  titulo_contactos.classList.toggle("dark_mode_sombraEspecial"); //Titulo de los Contactos
});

btn_3puntos.addEventListener("click", function() {
  menu_navegador.classList.toggle("menu_navegador_active"); //Menú del Navegador
});

// Activar la imagen del navegador en grande
document.getElementById("imagen_navegador").addEventListener("click", function() {
  document.getElementById("contenedor_img_nav_float").classList.toggle("contenedor_img_nav_float_active");
});
// Desactivar la imagen del navegador en grande
document.getElementById("btn_img_nav_float").addEventListener("click", function() {
  document.getElementById("contenedor_img_nav_float").classList.toggle("contenedor_img_nav_float_active");
});


btn_salir_ventanaFlotante_infotep.addEventListener("click", function() {
  ventanaFlotante_infotep.classList.toggle("ventanaFlotante_infotep_Active");
});

infotep__btn.addEventListener("click", function() {
  ventanaFlotante_infotep.classList.toggle("ventanaFlotante_infotep_Active");
});