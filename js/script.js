//ativar links do menu
const links = document.querySelectorAll('.header-menu a')

function ativarLink(link){
    const url = location.href
    const href = link.href

    if(url.includes(href)){
        link.classList.add("ativo")
    }
}

links.forEach(ativarLink)

//ativar itans do orçamento
const parametros = new URLSearchParams(location.search)
function ativarProduto(parametro){
    const element = document.getElementById(parametro)
    if(element){
        element.checked = true
    }

   
}

parametros.forEach(ativarProduto)

//perguntas frequentes

const perguntas = document.querySelectorAll('.perguntas button')
 
function ativarPergunta(event){
    const pergunta = event.currentTarget
    const control = pergunta.getAttribute('aria-controls')
    const resposta = document.getElementById(control)

    resposta.classList.toggle('ativa')
    const ativa = resposta.classList.contains('ativa')
    pergunta.setAttribute('aria-expanded', ativa)
    
}

function eventosPerguntas(pergunta){
    pergunta.addEventListener('click', ativarPergunta)
}

perguntas.forEach(eventosPerguntas)
addEventListener

//galeria de bicicletas
const galeria = document.querySelectorAll('.bicicletas-imagens img')
const containerGaleria = document.querySelector('.bicicletas-imagens')

function trocarImagem(event){
    const img = event.currentTarget
    const media = window.matchMedia('(min-width:1000px)').matches
    if (media){
        containerGaleria.prepend(img)
    }
    
}

function eventosGaleria(img){
    img.addEventListener('click',trocarImagem)
}

galeria.forEach(eventosGaleria)

//plugin
if(window.SimpleAnime){
new SimpleAnime();}

