let imagemMinimalista = [];
const imgMinimalista = document.getElementById('imgMinimalista')
getJson()
async function getJson(){
    await fetch("./src/json/minimalista.json").then((response) => {
        response.json().then((button) => {
            imagemMinimalista = button
            exibirPublicacoesMinimalista(imagemMinimalista)
        })
    })
}l
function exibirPublicacoesMinimalista(imagensMinimalista){
    imagensMinimalista.forEach(btn => {
        imgMinimalista.innerHTML += `
        <img src="${btn.imagem}" class="img_cards_design_minimalista col-xl-4 p-1" alt="">
        `
    })
}