const loginUser = (email, password, callback) =>
{
    console.log("Inicia o setTimeout");
    setTimeout(() =>
    {
        console.log("User logado!");
        callback ({ email });
    }, 1500);
    console.log("Termina o setTimeout");
};

const user = loginUser("Anderson", "123456", (user) =>
{
    console.log({user});
});

//console.log({ user });