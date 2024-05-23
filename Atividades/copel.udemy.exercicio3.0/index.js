class Carro
{
    constructor(model, ano)
    {
        this.model = model;
        this.ano = ano;
    }
}

function modeloCria()
{
    let model = prompt("Modelo:");
    let ano = prompt("Ano:");
    try
    {
        let dateCorr = trataDate(ano);       
        let newModel = new Carro(model, dateCorr);
        return newModel;
    }
    catch(error)
    {
        console.error(error.menssage);
        return null;
    }
}

function trataDate(ano)
{
    if(ano.length !== 8)
    {
        throw new Error("Data Incorreta");
    }
    else
    {
        let diaAlt = ano.substring(0, 2);
        let mesAlt = ano.substring(2, 4);
        let anoAlt = ano.substring(4, 8);

        let dateAlt = `${diaAlt}/${mesAlt}/${anoAlt}`;

        return dateAlt;
    }
}

function modelExibe()
{
    if(newModel)
    {
        console.log(` Modelo: ${newModel.model}\n`,
                    `Ano: ${newModel.ano}`);
    }
}

let newModel = modeloCria();
modelExibe(newModel);