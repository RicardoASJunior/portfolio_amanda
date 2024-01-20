let imagensVoluntarios = [];
const imgVoluntarios = document.getElementById('imgVoluntarios')
getJson()
async function getJson(){
    await fetch("./src/json/voluntario.json").then((response) => {
        response.json().then((button) => {
            imagensVoluntarios = button
            exibirPublicacoesVoluntarios(imagensVoluntarios)
        })
    })
}l
function exibirPublicacoesVoluntarios(imagensVoluntarios){
    imagensVoluntarios.forEach(btn => {
        imgVoluntarios.innerHTML += `
        <img src="${btn.imagem}" class="img_cards_voluntarios  col-xl-3 col-md-12" alt="">
        `
    })
}


