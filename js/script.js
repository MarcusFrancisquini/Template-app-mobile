//-=-=-=-=-=-=-=-=-=-=-=-=-=-Navbar-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

const btnMobile = document.getElementById('btn-mobile');
const bodyRolar = document.getElementById('body');
const menuItem = document.querySelector('.menu-nav');


// lista de itens da navbar
const itemMenu1 = document.querySelector('.item1');
const itemMenu2 = document.querySelector('.item2');
const itemMenu3 = document.querySelector('.item3');
const itemMenu4 = document.querySelector('.item4');


// Abrir e fechar o menu Mobile
function toggleMenu(event) {
    if(event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('navbar');
    nav.classList.toggle('active');
    bodyRolar.classList.toggle('travar');
}


// Fechar o menu mobile ao clicar em um item
function fecharMenu(event){
    if(event.type === 'click'){
        const nav = document.getElementById('navbar');
        nav.classList.remove('active');
        bodyRolar.classList.toggle('travar');
    }
}


// Referenciando as funções
btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);
menuItem.addEventListener('click', fecharMenu);


//-=-=-=-=-=-=-=-=-=-=-=-=-=-About-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// Debounce do Lodash
const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
      const context = this;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
};

// Elementos que serão animados
const target = document.querySelectorAll('[data-animacao]');

// Classe a ser adicionada
const targetClass = 'show';

// Função de animação
function animarScroll(){
    // Distancia da barra de rolagem até o topo
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4); // Compensar o valor da distância
    target.forEach(function(element){
        if ((windowTop) > element.offsetTop) {
            element.classList.add(targetClass); // Adicionando a classe 
        } else{
            element.classList.remove(targetClass); // Removendo a classe
        } 
    })
}

// Ativação da função ao entrar na página
animarScroll();

// Ativação da função ao dar Scroll
if (target.length) {
    window.addEventListener('scroll', debounce(function() {
        animarScroll();
    }));
}


//-=-=-=-=-=-=-=-=-=-=-=-=-=-Cards do About-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

//Cards
const primeiroCard = document.getElementById('primeiro-card');

const segundoCard = document.getElementById('segundo-card');

const terceiroCard = document.getElementById('terceiro-card');

// Textos dos Cards
const textprimeiroCard = document.getElementById('text-card-primeiro'); // card 1

const textsegundoCard = document.getElementById('text-card-segundo'); // card 2

const textterceiroCard = document.getElementById('text-card-terceiro'); // card 3


// Primeiro card
function primeiro(){
    primeiroCard.classList.toggle('selected');
    textprimeiroCard.classList.toggle('mostrar'); // mostrar o texto

    if (segundoCard.classList.contains('selected') ) {
        segundoCard.classList.toggle('selected');
        textsegundoCard.classList.toggle('mostrar'); 
    }

    if (terceiroCard.classList.contains('selected')) {
        terceiroCard.classList.toggle('selected');
        textterceiroCard.classList.toggle('mostrar'); 
    }
}

// Segundo card
function segundo(){
    segundoCard.classList.toggle('selected');
    textsegundoCard.classList.toggle('mostrar'); // mostrar o texto

    if (primeiroCard.classList.contains('selected')) {
        primeiroCard.classList.toggle('selected');
        textprimeiroCard.classList.toggle('mostrar'); 
    }

    if (terceiroCard.classList.contains('selected')) {
        terceiroCard.classList.toggle('selected');
        textterceiroCard.classList.toggle('mostrar'); 
    }
}

// Terceiro card
function terceiro(){
    terceiroCard.classList.toggle('selected');
    textterceiroCard.classList.toggle('mostrar'); // mostrar o texto

    if (primeiroCard.classList.contains('selected')) {
        primeiroCard.classList.toggle('selected');
        textprimeiroCard.classList.toggle('mostrar'); 
    }

    if (segundoCard.classList.contains('selected') ) {
        segundoCard.classList.toggle('selected');
        textsegundoCard.classList.toggle('mostrar'); 
    }
}


//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-END-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=