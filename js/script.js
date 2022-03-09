//1 ADICIONAR IDS NOS BOTÕES **
//1...4 ***
//2 SELECIONAR OS BOTÕES
//3 INTERCEPTAR O EVENTO DE CLIQUE
//4 RECUPERAR O ID ADICIONADO


//SELECIONANDO UL(LISTA)
const listaOpcoes = document.querySelector(".secaoDetalhesConta_Transacoes")

//ADICIONANDO ESCUTADOR DE EVENTOS
listaOpcoes.addEventListener("click", indentificarOpcoes)

//EXECUTANDO AÇÃO DEPOIS DO CLIQUE
function indentificarOpcoes(event){

  //IDENTIFICANDO ONDE OCORREU O CLIQUE
  const elemento = event.target

  //VERIFICANDO SE É UM LI
  if(elemento.tagName == "LI"){

    //RECUPERANDO O ID
    const id = elemento.id

    //SELECIONANDO UMA SEÇÃO UTILIZANDO O ID(ESCOLHA DO USUÁRIO)
    const secaoEscolha = document.querySelector()
  }

}