/*******************************************************************************************************************
 * Objetivo: Projeto de realizar cálculo de juros compostos
 * Autor: Francisco Wala
 * Data: 04/02/2026
 * Versão: 1.0
 * ******************************************************************************************************************/ 


const readline = require('readline')

const entradaDeDados = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})
    //Entrada de nome do cliente
    entradaDeDados.question('Digite o nome do cliente: ',function(nome){
        let nomeCliente = nome
        //Entrada de nome do produto
        entradaDeDados.question('Digite o nome do produto: ', function(produto){
            let nomeProduto =  produto
            //Entrada de nome do produto
            entradaDeDados.question('Insira o valor da compra: ',function(C){
                let valorCompra = C
                //Entrada da taxa de juros ao produto
                entradaDeDados.question('Insira a taxa de juros para o produto: ',function(i){
                let taxaProduto = i
                        //Entrada do tempo de pagamento do cliente
                        entradaDeDados.question('Insira o tempo de pagamento: (1)Mês ou (2)Ano ', function(periodo){
                            let mes = periodo
                            entradaDeDados.question('Insira o período desejado: ',function(meses){
                                let n  = meses
                                //Validação para campo vazio
                                if(nomeCliente == '' || nomeProduto == ''){
                                console.log('ERRO: Campos obrigatórios não foram preenchidos')
                                //Validação de valor numeriocos negativos
                                }else if ( C <= 0 || i <= 0 || periodo<=0 ) {
                                    console.log('Erro: os números não podem ser negativos')
                                //Validação para não poder colocar letras nos campos numéricos e números no campo do tipo String
                                }else if(!isNaN (nomeCliente) || isNaN(C) ||isNaN (i) || isNaN(n) ){
                                console.log(`Erro: Existe campos com inserção de dados errados`)
                                //Validação de número diferente das opções entregues pelo sistema e evitar de entrada de String na declaração de mês 
                                }else if(isNaN(periodo) ||periodo != 1 && periodo !=2 ){
                                    console.log('Erro: Opção inválida, escolha entre 1 ou 2')
                                }else{

                                    

                                    if ( mes == 2){
                                        n = n*12
                                        let montante = Number(C)*Number(1 + i/100)**Number(n)
                                        //console.log(montante.toFixed(2))

                                        let acrescimo = Number(montante.toFixed(2)) - Number (valorCompra)

                                        console.log(
`******************* [Viva Moda] ****************************************************
Muito obrigado por realizar a sua compra conosco Sr(a) ${nomeCliente}.
A compra do produto ${nomeProduto}, tem um valor de: ${valorCompra}.
A sua compra será parcelada em ${periodo} vezes e o Sr(a) pagará: ${montante.toFixed(2)}.
O acréscimo realizado ao valor de: ${valorCompra} será de ${acrescimo.toFixed(2)}.

Muito obrigado por escolher a [Viva Moda].
************************************************************************************`)
                                    }else{
                                        
                                        let montante = Number(C)*Number(1 + i/100)**Number(n)
                                        //console.log(montante.toFixed(2))
                                    
                                        let acrescimo = Number(montante.toFixed(2)) - Number (valorCompra)

                                        console.log(
`******************* [Viva Moda] ****************************************************
Muito obrigado por realizar a sua compra conosco Sr(a) ${nomeCliente}.
A compra do produto ${nomeProduto}, tem um valor de: ${valorCompra}.
A sua compra será parcelada em ${periodo} vezes e o Sr(a) pagará: ${montante.toFixed(2)}.
O acréscimo realizado ao valor de: ${valorCompra} será de ${acrescimo.toFixed(2)}.

Muito obrigado por escolher a [Viva Moda].
************************************************************************************`)
                                    }

                                    entradaDeDados.close()

                                }
                            })

                        })

                })
        
            })

        })
    
    })   
            

    