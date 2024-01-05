// listener mudar cor cabeçalho
let header = document.getElementById('iHeader');
header.addEventListener("mouseenter", () =>{
    console.log("mouse entrou");
    header.style.backgroundColor = 'rgb(48, 43, 43)';
})
header.addEventListener("mouseleave", () =>{
    console.log("mouse saiu");
    header.style.backgroundColor = 'black';
})

// listener mostrar título quando clica no artigo
let articles = document.querySelectorAll('article');
articles.forEach(article => {
    article.addEventListener('click', e => {
        alert(e.currentTarget.querySelector('h2').innerText)
    })
})