function alteraData(da)
{
    if(da.length !== 8)
    {
        throw new Error("Error !!");
    }
    else
    {
        let dirDate = da.substring(0, 2);
        let monDate = da.substring(2, 4);
        let yerDate = da.substring(4, 8);
        let protip = `${dirDate}/${monDate}/${yerDate}`;
        
        return console.log(protip);
    }
}

let da = prompt("Data");
alteraData(da);