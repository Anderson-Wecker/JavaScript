const p1 = new Promise(function(resolve, reject)
{
    setTimeout(function()
    {
        resolve(10)
    }, 1000);
});

const p2 = new Promise(function(resolve, reject)
{
    setTimeout(function()
    {
        resolve(15);
    }, 5000);
});

const p3 = Promise.resolve(10);

Promise.all([p1,p2,p3]).then((values) => console.log(values));