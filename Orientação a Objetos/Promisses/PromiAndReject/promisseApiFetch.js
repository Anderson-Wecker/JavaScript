const fetchPromisse = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",);

const fetchPromi = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",);

fetchPromisse.then((value) => 
{
    const promiJson = value.json();
    promiJson.then((response) => 
    {
        console.log(`Resposta recebida: ${response[0].name}`);
        console.log(`Resposta recebida: ${response[0].price}`);
    });
    console.log(`Resposta recebida: ${value.status}`);
});

fetchPromi.then((value) =>
{
    const jsonPromisse = value.json();
    jsonPromisse.then((data) => 
    {
        console.log(data[0].name);
    });
});