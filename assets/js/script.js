$(function(){
    
    $("a").click(function(evento){
        if (this.hash !== "") {
            event.preventDefault();

            var gato = this.hash;

            $("html, body").animate({
                scrollTop: $(gato).offset().top
            },
            800, function(){
                window.location.hash = gato;
            });
        }      
    });

    $('[data-toggle="popover"]').popover();

});

/*PASOS A SEGUIR
1.Llamar a la funcion del document ready, para que esta se ejecute despues de que toda la pagina este cargada
    $(function(){
    });


1.1.To test if js it's working hash method
    $("a").click(function(event){
    alert(this.hash);

2. Seleccionar todas las etiquetas a (tipo link) para generar scroll
    $("a").click(function(event){
    });

$(function(){
    $("a").click(function(event) {
    
    // Con este if se asegura que this.hash tenga un valor antes de anular el comportamiento predeterminado
        if (this.hash !== "") {

    // Previene el comportamiento de click predeterminado
        event.preventDefault();
    
    // Guarda el valor del hash en una variable llamada gato
        var gato = this.hash;

    // Usa el método animate para animar el scroll y hacerlo de una forma suave
    // El número opciona (800) especifica el número de milisegundos que se demorará en llegar hasta el área
        $('html, body').animate({
            scrollTop: $(gato).offset().top
        }, 800, function(){
    
    // Agrega hash (#) a la URL cuando haya terminado de desplazarse (comportamiento de click predeterminado)
            window.location.hash = gato;
            });
        } // Fin del if
    });
});

$('[data-toggle="popover"]').popover();
    Se lee: a todos los elementos que tengan data-toggle con el valor "popover".
    Le damos el metodo .popover()

*/

