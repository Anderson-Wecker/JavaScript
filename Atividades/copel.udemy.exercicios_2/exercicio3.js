let onibus = 
{
    rodas: 8,
    limPass: 40,
    portas: 2,
    janelas: 20
};

console.log(`Limite de passageiros: ${onibus.limPass}`);
console.log(`Quantidade de Portas: ${onibus.portas}`);

delete onibus.rodas;
onibus.janelas = 20;

console.log(`Quantidade de janelas ${onibus.janelas}`);