let teste = document.querySelector('#titulo-principal');

console.log('largura:' + teste.offsetWidth); // considera as bordas
console.log('altura:' + teste.offsetHeight);

console.log('largura:' + teste.clientWidth); //não considera as bordas
console.log('altura:' + teste.clientHeight);