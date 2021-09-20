// Todas las Variables
var btn_modoMoche = document.getElementById('btn_modoMoche');

var body = document.getElementById('body'); //
var caja_estudios = document.getElementById('caja_estudios'); //Cajón de Estudios
var imagen_navegador_fondo = document.getElementById('navegador');
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

btn_modoMoche.addEventListener('click', function() {
  if (localStorage.getItem('darkMode') == 0) {
    localStorage.setItem('darkMode', 1);
  } else {
    let datos = localStorage.getItem('darkMode');
    datos = 0;
    localStorage.setItem('darkMode', datos)
  }
  darkMode_navegador();
});
// FUNCION PARA ACTIVAR/DESACTIVAR EL MODO NOCHE
function darkMode_navegador() {
  all_config_modoNoche();
}  
darkMode();
// FUNCION PARA DEJAR ACTIVADO EL MODO NOCHE CUANDO SE RECARGUE LA PAGINA
function darkMode() {
  if (localStorage.getItem('darkMode') == 1) {
    all_config_modoNoche();
  }
}  
function all_config_modoNoche() {
  // MODO NOCHE
  body.classList.toggle('darkMode');
  btn_modoMoche.classList.toggle('darkMode');
  imagen_navegador_fondo.classList.toggle('darkMode');
  // CAJON DE NAVEGADOR (HEADER)
  document.querySelector('.titulo_navegador')            .classList.toggle('darkMode');
  document.querySelector('.caja_flotante_darkMode')      .classList.toggle('darkMode');
  document.querySelector('.formato_titulo_cajas_mayores').classList.toggle('darkMode');
  document.querySelector('.subMenu1')                    .classList.toggle('darkMode');
  document.querySelector('.subMenu2')                    .classList.toggle('darkMode');
  document.querySelector('.subMenu3')                    .classList.toggle('darkMode');
  document.querySelector('.subMenu4')                    .classList.toggle('darkMode');
  document.querySelector('.nombre')                      .classList.toggle('darkMode');
  document.querySelector('.txt_imagen')                  .classList.toggle('darkMode');
  // VEVNTANA FLOTANTE DEL NAVEGADOR 
  document.querySelector('.caja_informacionPersonal')    .classList.toggle('darkMode');
  document.querySelector('.txt_imagen')                  .classList.toggle('darkMode');
  document.querySelector('.txt_imagen')                  .classList.toggle('darkMode');
  document.querySelector('.txt_imagen')                  .classList.toggle('darkMode');
  document.querySelector('.txt_imagen')                  .classList.toggle('darkMode');
  document.querySelector('.txt_imagen')                  .classList.toggle('darkMode');
  document.querySelector('.txt_imagen')                  .classList.toggle('darkMode');
  // CAJON DE ESTUDIOS
  document.querySelector('.caja_estudios')                      .classList.toggle('darkMode');
  document.querySelector('.tituloPrincipal_estudiosMedios')     .classList.toggle('darkMode');
  document.querySelector('.txt_tituloPrincipal_estudiosMedios') .classList.toggle('darkMode');
  document.querySelector('.txt_titulo_caja_estudios')           .classList.toggle('darkMode');
  document.querySelector('.svg_titulo_caja_estudios')           .classList.toggle('darkMode');
  document.querySelector('.titulo_infotep')                     .classList.toggle('darkMode');
  document.querySelector('.caja_contenido_infotep')             .classList.toggle('darkMode');
  document.querySelector('.txt_titulo_infotep')                 .classList.toggle('darkMode');
  document.querySelector('.dpw_titulo')                         .classList.toggle('darkMode');
  document.querySelector('.mpoi_titulo')                        .classList.toggle('darkMode');
  document.querySelector('.w-nt_titulo')                        .classList.toggle('darkMode');
  document.querySelector('.titulo_auxiliar_ventas')             .classList.toggle('darkMode');
  document.querySelector('.img_auxiliarVentas')                 .classList.toggle('darkMode');
  document.querySelector('.titulo_conclusionEstudiosMedios')    .classList.toggle('darkMode');
  document.querySelector('.logo_tituloPrincipal_estudiosMedios').classList.toggle('darkMode');
  document.querySelector('.Formato_btn')                        .classList.toggle('darkMode');
  // VENTANA FLOTANTE DE ESTUDIOS
  document.querySelector('.ventanaFlotante_infotep')                        .classList.toggle('darkMode');
  document.querySelector('.Formato_btn')                        .classList.toggle('darkMode');
  document.querySelector('.Formato_btn')                        .classList.toggle('darkMode');
  document.querySelector('.Formato_btn')                        .classList.toggle('darkMode');
  document.querySelector('.Formato_btn')                        .classList.toggle('darkMode');
  // CAJON DE EXPERIENCIAS
  document.querySelector('.tituloPrincipal_experiencias')       .classList.toggle('darkMode');
  document.querySelector('.svg_tituloPrincipal_experiencias')   .classList.toggle('darkMode');
  document.querySelector('.cajon_experiencias')                 .classList.toggle('darkMode');
  // document.querySelector('.txt_tituloPrincipalexperiencas')  .classList.toggle('darkMode');
  // document.querySelector('.txt_tituloPrincipalexperiencas')  .classList.toggle('darkMode');
  // document.querySelector('.caja_estudiosMedios')             .classList.toggle('darkMode');
  // document.querySelector('.auxiliar_ventas')                 .classList.toggle('darkMode');

  // MODO NOCHE EN EL CAJON DE CONTACTOS
  document.querySelector('.tituloPrincipal_contactos').classList.toggle('darkMode');
  document.querySelector('.caja_contactos')  .classList.toggle('darkMode');
  document.querySelector('.txt_tituloPrincipal_contactos')  .classList.toggle('darkMode');
  document.querySelector('.svg_tituloPrincipal_contactos')  .classList.toggle('darkMode');
  document.querySelector('.titulo_columna1') .classList.toggle('darkMode');
  document.querySelector('.parrafo_columna1').classList.toggle('darkMode');
  document.querySelector('.titulo_columna2') .classList.toggle('darkMode');
  document.querySelector('.txt_facebook')    .classList.toggle('darkMode');
  document.querySelector('.txt_twitter')     .classList.toggle('darkMode');
  document.querySelector('.txt_instagram')   .classList.toggle('darkMode');
  document.querySelector('.txt_whatsapp')    .classList.toggle('darkMode');
  document.querySelector('.titulo_columna3') .classList.toggle('darkMode');
  document.querySelector('.logo_direccion')  .classList.toggle('darkMode');
  document.querySelector('.caja_direccion')  .classList.toggle('darkMode');
  document.querySelector('.txt_direccion')   .classList.toggle('darkMode');
  document.querySelector('.logo_telefono')   .classList.toggle('darkMode');
  document.querySelector('.caja_telefono')   .classList.toggle('darkMode');
  document.querySelector('.txt_telefono')    .classList.toggle('darkMode');
  document.querySelector('.caja_gmail')      .classList.toggle('darkMode');
  document.querySelector('.logo_gmail')      .classList.toggle('darkMode');
  document.querySelector('.txt_gmail')       .classList.toggle('darkMode');
  document.querySelector('.logo_copyright')  .classList.toggle('darkMode');
  document.querySelector('.txt_copyright')   .classList.toggle('darkMode');
}

// BOTON DE 3 PUNTOS
btn_3puntos.addEventListener('click', function() {
  menu_navegador.classList.toggle('menu_navegador_active'); //Menú del Navegador
});

// ACTIVAR LA IMAGEN EN GRANDE DEL NAVEGADOR
document.getElementById('imagen_navegador').addEventListener('click', function() {
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