// Todas las Variables

var body = document.getElementById('body'); //
var caja_estudios = document.getElementById('caja_estudios'); //Cajón de Estudios
// var imagen_navegador_fondo = 
var cajon_contactos = document.getElementById('contactos'); //Cajón de los Contactos
var titulo_contactos = document.getElementById('titulo_contactos'); //Titulo de Estudios
var txt_facebook = document.getElementById('txt_facebook'); 
var caja_infotep = document.getElementById('caja_infotep'); //CAJA DE INFOTEP
var caja_estudiosMedios = document.getElementById('caja_estudiosMedios'); //CAJA DE ESTUDIOS MEDIOS
var txt_whatsapp = document.getElementById('txt_whatsapp'); //
var txt_twitter = document.getElementById('txt_twitter');
var txt_instagram = document.getElementById('txt_instagram');
var btn_salir_ventanaFlotante_infotep = document.getElementById('btn_salir_ventanaFlotante_infotep') //Botón Salir de Ventana Flotante de Infotep
var btn_3puntos = document.getElementById('btn_3puntos'); //Botón de 3 Puntos Dispositivos Móviles
var menu_navegador = document.getElementById('menu_navegador'); //Menú del Navegador


// BOTON DE 3 PUNTOS
btn_3puntos.addEventListener('click', function() {
  menu_navegador.classList.toggle('menu_navegador_active'); //Menú del Navegador
});

// ACTIVAR LA IMAGEN EN GRANDE DEL NAVEGADOR
document.getElementById('caja_imagen_navegador').addEventListener('click', function() {
  document.getElementById('contenedor_img_nav_float').classList.toggle('active');
});
// DESACTIVAR LA IMAGEN EN GRANDE DEL NAVEGADOR
document.getElementById('btn_img_nav_float').addEventListener('click', function() {
  document.getElementById('contenedor_img_nav_float').classList.toggle('active');
});
// ACTIVAR LA VENTANA FLOTANTE DE INFOTEP
var infotep_btn = document.getElementById('infotep_btn');
var ventanaFlotante_infotep = document.getElementById('ventanaFlotante_infotep')
infotep_btn.addEventListener('click', function() {
  ventanaFlotante_infotep.classList.toggle('active');
  caja_infotep.classList.toggle('opacidad25');
  caja_estudiosMedios.classList.toggle('opacidad25')
});
// DESACTIVAR LA VENTANA FLOTANTE DE 'INFOTEP'
btn_salir_ventanaFlotante_infotep.addEventListener('click', function() {
  ventanaFlotante_infotep.classList.toggle('active');
  caja_infotep.classList.toggle('opacidad25');
  caja_estudiosMedios.classList.toggle('opacidad25')
});

// ACTIVAR LA VENTANA DE 'ESTUDIOS MEDIOS'
var btn_estudiosMedios = document.getElementById('btn_estudiosMedios');
var cajaFlotante_estudioMedios = document.getElementById('caja_ventanaFlotante_estudiosMedios');

btn_estudiosMedios.addEventListener('click', function() {
  cajaFlotante_estudioMedios.classList.toggle('active');
  caja_infotep.classList.toggle('opacidad25');
  caja_estudiosMedios.classList.toggle('opacidad25')
});

// DESACTIVAR LA VENTANA FLOTANTE DE 'ESTUDIOS MEDIOS'
var btn_salir_ventanaFlotante_estudiosMedios = document.getElementById('btnSalir_ventanaFlotante_estudiosMedios');

btn_salir_ventanaFlotante_estudiosMedios.addEventListener('click', function() {
  cajaFlotante_estudioMedios.classList.toggle('active');
  caja_infotep.classList.toggle('opacidad25');
  caja_estudiosMedios.classList.toggle('opacidad25')
});