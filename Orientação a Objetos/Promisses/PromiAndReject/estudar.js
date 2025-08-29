function pedirPizza(tipo, nome) {
    
    // Consulta a pizzahub por uma loja
    query(`/api/pizzahub/`, function(resultado, erro){
       if (!erro) {
           let idLoja = resultado.idLoja;
           
           // Obtém a loja e consulta as pizzas
           query(`/api/pizzahub/pizza/${idLoja}`, function(resultado, erro){
               if (!erro) {
                   let pizzas = resultado.pizzas;
                   
                   // Verifica se minha pizza está disponível
                   let minhaPizza = pizzas.find((pizza) => {
                       return (pizza.tipo===tipo && pizza.nome===nome);
                   });
                   
                   // Verifique se há bebidas gratuitas
                   query(`/api/pizzahub/bebidas/${minhaPizza.id}`, function(resultado, erro){
                       if (!erro) {
                           let bebida = resultado.id;
                           
                           // Prepara um pedido
                           query(`/api/pedido`, {'tipo': tipo, 'nome': nome, 'bebida': bebida}, function(resultado, erro){
                              if (!erro) {
                                  console.log(`Seu pedido de ${tipo} ${nome} com ${bebida} foi realizado`);
                              } else {
                                  console.log(`Infelizmente, não temos pizzas para você hoje!`);
                              }
                           });

                       }
                   })
               }
           });
       } 
    });
}

// Chama a função orderPizza
pedirPizza('vegetariana', 'marguerita');