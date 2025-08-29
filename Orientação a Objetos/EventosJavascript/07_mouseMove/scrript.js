//Evento com movimento do mouse
/*window.addEventListener("mousemove", function(e)
{
    console.log(e.x);
    console.log(e.y);
    if(e.x == 13 && e.y == 62)
    {
        console.log('Ponteiro em cima do botão Remove Evento' + count);
    }
});*/

//Evento com scroll do mouse
window.addEventListener("scroll", function(e)
{
    if(window.pageYOffset > 1000)
    {
        console.log('Ativou');
    }
});