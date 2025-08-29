// let element = document.querySelector("input");
// let element2 = document.getElementById('element');

// element.addEventListener("focus", function()
// {
//     console.log("Entrou no imput");
// });
// element2.addEventListener("focus", function()
// {
//     console.log("Saiu do Input");
// });
// //evento de carregamento de página
// window.addEventListener("load", function()
// {
//     this.alert("Evento load");
// });
// //evento depois do carregamento

// window.addEventListener("beforeunload", function(e)
// {
//     event.returnValue = null;
// });
let timeout;
window.addEventListener("mousemove", function(e)
{
    this.clearTimeout(timeout);
    timeout = setTimeout(function() 
    {
       console.log(e.x);
    }, 500);    
});