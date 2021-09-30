var btn_modoMoche = document.getElementById('btn_modoMoche');

// FUNCION PARA GUARDAR LA CONFIGURACION DEL MOODO OSCURO EN UNA BASE DE DATOS
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
    // BOTON MODO NOCHE
    body.classList.toggle('darkMode');
    btn_modoMoche.classList.toggle('darkMode');
    // CAJON DE NAVEGADOR (HEADER)
    document.querySelector('.navegador')                   .classList.toggle('darkMode');
    document.querySelector('.titulo_navegador')            .classList.toggle('darkMode');
    document.querySelector('.caja_flotante_darkMode')      .classList.toggle('darkMode');
    document.querySelector('.formato_titulo_cajas_mayores').classList.toggle('darkMode');
    document.querySelector('.subMenu1')                    .classList.toggle('darkMode');
    document.querySelector('.subMenu2')                    .classList.toggle('darkMode');
    document.querySelector('.subMenu3')                    .classList.toggle('darkMode');
    document.querySelector('.subMenu4')                    .classList.toggle('darkMode');
    document.querySelector('.subMenu5')                    .classList.toggle('darkMode');
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