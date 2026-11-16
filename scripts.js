/*
1) Logica de programação
  Saber a sequencia que o computador/projeto
  quer que você execute as coisas

2) Algoritmos
  Receita de bolo, passo a passo, para que o computador entenda o que você quer que ele faça


  ALGORITMO 1
  1) Saber quem é quuem (imagem, botão, etc)
  2) Saber que o botão foi clicado e qual botão
  3) Trocar a foto e o nome do personagem
  
  ALGORITMO 2
  1) Pegar a imagem do usuario
  2) Enviar para a IA imagem + o que eu quero que ela faça


  
3) Variaveis
4) Funções
É um pedacinho de código que só executa quando é chamado 



HTML = document
querySeelector = Selecionar ALGO no HTML
( ) = entre parenteses você coloca o que você quer selecionar
  Quem ? Classe =.nomeDaClasse
console.log = mostrar no console do navegador
ineerHTML = colocar algo dentro do HTML

  1) criar uma variavel para guardar o que eu quero
  2) ir no HTML (com document)
  3) Selecionar quem eu quero com o querySelector
  4) Colocar entre parenteseso que eu quero selecionar (classe)

*/

let nome = document.querySelector(".nome");
let personagem = document.querySelector(".personagem");

// () = Capsula teletransportadora

function escolherPersonagem(nomePersonagem, imagemPersonagem, corPersonagem) {

  nome.innerHTML = nomePersonagem;
  personagem.src = imagemPersonagem;
  nome.style.color = corPersonagem;
  // innerHTML = colocar algo dentro do HTML
  // src = colocar algo dentro do src da imagem
}

/*
ALGORITMO 2
1) Pegar a imagem do usuario -OK
2) Enviar para a IA imagem + o que eu quero que ela faça
3) Receber a imagem da IA 
4) Colocar a imagem no site

*/
function lerFoto(Foto) {
  // ALERTA - ESSA PARTE É CHATINHA
  // TEM COISAS QUE VOCÊ NÃO TEM QUE ENTENDER AGORA, SÓ FAZ
  // BOMBA, POMBA ? ANTES DE P e B é M
  // onchange () = quando mudar algo, faça algo
  //onclick() = quando clicar em algo, faça algo
  //onload() = quando carregar algo, faça algo
  // toda vez que eu tenho que ir no servidor - ASYNC / AWAIT 

  let leitor = new FileReader(); // FileReader = Leitor de arquivos
  leitor.readAsDataURL(Foto.files[0]); // readAsDataURL = fiz a leitura da foto, e transformei em uma URL (link)
  leitor.onload = async function () {
   
    let desenho = await puter.ai.txt2img("Transforme a pessoa dessa foto em uma imagem de videogame, contorno preto grosso, cores vivas, meio corpo, mantendo o rosto parecido. Fundo totalmente transparente: Sem cenário, sem chão e sem sombras", 
      {
        model: "replicate:openai/gpt-image-2.5-flare",
        provider: "openai",
        input_image: leitor.result,
        qualy: "medium",
        providerOptions: {background: "transparent"}

        
      })

      escolherPersonagem("Você", desenho, "#d8a707");
   
}

}
