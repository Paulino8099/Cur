(function(){
    //Variables
    var input_tareas = document.getElementById("input_tareas"),
        lista = document.getElementById("lista"),
        btn_agregar_tareas = document.getElementById("btn_agregar_tareas");

    // Funciones...

    var agregar_tareas = function(){};
    var error_input = function(){
        input_tareas.classList.toggle("error_input")
    };
        
    // Eventos...

    // Evento para Agregar Tareas
    btn_agregar_tareas.addEventListener("click", error_input);

}());
