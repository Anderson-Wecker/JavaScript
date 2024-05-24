class Compras 
{
    constructor(product, qtdTotal, valTotal)
    {
        this.setCompra = product;
        this.setQtdTotal = qtdTotal;
        this.setValTotal = valTotal;
    }
    get getCompra()
    {
        return this.product;
    }

    set setCompra(product)
    {
        if(typeof product === 'string' && product.trim() !== '')
        {
            this.product = product;
        }
        else
        {
            throw new Error("Nome de produto inválido !");
        }
    }

    get getQtdTotal()
    {
        this.qtdTotal = qtdTotal;
    }

    set setQtdTotal(qtdTotal)
    {
        if(Number.isInteger(qtdTotal) && qtdTotal >= 0)
        {
            this.qtdTotal = qtdTotal;
        }
        else
        {
            throw new Error("Valor inválido !");
        }

    }
    get getValTotal()
    {
        this.valTotal = this.valTotal;
    }

    set setValTotal(valTotal)
    {
        if(Number.isInteger(valTotal) && valTotal >= 0)
        {
            this.valTotal = valTotal;
        }
        else
        {
            throw new Error("Total inválido");
        }
    }

    criaPoduct(qtd, val)
    {
        if(this.validarQtd(qtd) && this.validaValor(val))
        {
            this.qtdTotal += qtd;
            this.valTotal += val;
        }
        else
        {
            console.log("Error");
        }
    }

    removeProduct(qtd, val)
    {
        if(this.validarQtd(qtd) && this.validaValor(val))
        {
            if(qtd <= this.qtdTotal && val <= this.valTotal)
            {
                this.qtdTotal -= qtd;
                this.valTotal -= val;
            }
            else
            {
                console.log("Valor excede o total");
            }
        }
        else 
        {
            console.log("Quantidade ou valor inválido");
        }
    }

    validarQtd(qtd)
    {
        return Number.isInteger(qtd) && qtd >= 0;
    }

    validaValor(val)
    {
        return Number.isInteger(val) && val >= 0;
    }

    formatVal()
    {
        
        if(typeof valTotal === 'number')
        {
            console.log(Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valTotal));
        }
    }

    exibeProduct(newItem)
    {
        if(newItem)
        {
            console.log(` Produto: ${newItem.product}\n`,
                        `Quantidade: ${newItem.qtdTotal}\n`,
                        `Valor: ${newItem.valTotal}`);
        }
    }
}

let newItem = new Compras("Teclado", 2, 210);

newItem.formatVal();
console.log(newItem);
newItem.exibeProduct(newItem.formatVal());