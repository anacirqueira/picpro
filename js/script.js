//1 ADICIONAR IDS NOS BOTÕES **
//1...4 ***
//2 SELECIONAR OS BOTÕES
//3 INTERCEPTAR O EVENTO DE CLIQUE
//4 RECUPERAR O ID ADICIONADO


//SELECIONANDO UL(LISTA)
const listaOpcoes = document.querySelector(".secaoDetalhesConta_transacoes")

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
    const secaoEscolha = document.querySelector(`div[data-id="${id}"]`)

    //REMOVENDO A CLASSE MOSTRAR
    removeClasseMostrar()

    //ADICIONANDO UMA CLASSE
    secaoEscolha.classList.add("mostrar")

  }

}


//FUNÇÃO PARA REMOVER AS CLASSES DAS DIV'S