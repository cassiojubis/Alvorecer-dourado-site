
const filterButtons = document.querySelectorAll(".filter-btn"); // procura todos os botões de filtro
const galleryCards = document.querySelectorAll(".gallery-card"); // procura todos os cards da galeria
const galleryImages = document.querySelectorAll(".gallery-card"); //procura todas as imagens
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightbox-image");
const closeButton = document.querySelector(".close");
//console.log(filterButtons); Exibe os botões de filtro no console
//console.log(galleryCards);  Exibe os cards da galeria no console
//console.log(galleryImages); // exibe as imagems no console

filterButtons.forEach(function(botao){ // para cada botao da lista

    botao.addEventListener("click", function(){ // nesse botao fique esperando um clique
        
        for(let i = 0; i < filterButtons.length; i++) { // para cada botão da lista
            filterButtons[i].classList.remove("active"); // remove a classe active de todos os botões
        }
        
          botao.classList.add("active"); // adiciona a classe active ao botão clicado
        const categoria = botao.dataset.filter; // pega o valor do atributo data-filter do botão clicado

     //   console.log("Você clicou em:", botao.textContent); //mostra o  nome do botão clicado no console

        galleryCards.forEach(function(card){
            
                if(categoria == "all" || card.classList.contains(categoria)){
                    card.style.display =""; // mostra todos os cards                    
                }else{         
                    card.style.display ="none"; //esconde os cards não pertencentes a categoria
                }
            
        });
    });

});
galleryImages.forEach(function(img){
    img.addEventListener("click", function(){

  //       console.log("voce clicou em:",img.src);

    });
});


galleryCards.forEach(function(card){

    card.addEventListener("click", function(){

        const imagem = card.querySelector("img");

        lightboxImage.src = imagem.src;

        lightbox.classList.add("active");

    });

});

// Fechar pelo X
closeButton.addEventListener("click", function(){

    lightbox.classList.remove("active");

});

// Fechar clicando fora da imagem
lightbox.addEventListener("click", function(event){

    if(event.target === lightbox){

        lightbox.classList.remove("active");

    }

});
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const menuLinks = document.querySelectorAll(".nav-links a");

menuToggle.addEventListener("click", function(){

    menuToggle.classList.toggle("active");
    navLinks.classList.toggle("active");

    document.body.classList.toggle("menu-open");

});

menuLinks.forEach(function(link){

    link.addEventListener("click", function(){

        menuToggle.classList.remove("active");
        navLinks.classList.remove("active");

        document.body.classList.remove("menu-open");

    });

});

const backToTopButton = document.querySelector(".back-to-top");

if(backToTopButton){

    window.addEventListener("scroll", function(){

        if(window.scrollY > 400){

            backToTopButton.classList.add("show");

        }else{

            backToTopButton.classList.remove("show");

        }

    });

    backToTopButton.addEventListener("click", function(){

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}
/* ==================================
   SCROLL REVEAL
================================== */

// Títulos das seções
const sectionTitles = document.querySelectorAll(
    ".section-title, .gallery-header, .section-header"
);

// Imagem e conteúdo da seção Sobre
const aboutImage = document.querySelector(".about-image-wrapper");
const aboutContent = document.querySelector(".about-content");

// Cards e demais elementos
const revealCards = document.querySelectorAll(
    ".gallery-card, .testimonial-card, .contact-item"
);

const contactMap = document.querySelector(".contact-map");
const footerContent = document.querySelector(".footer-content");


/* Adiciona as direções das animações */

sectionTitles.forEach(function(title){

    title.classList.add("reveal-up");

});

if(aboutImage){

    aboutImage.classList.add("reveal-left");

}

if(aboutContent){

    aboutContent.classList.add("reveal-right");

}

revealCards.forEach(function(card){

    card.classList.add("reveal-up");

});

if(contactMap){

    contactMap.classList.add("reveal-right");

}

if(footerContent){

    footerContent.classList.add("reveal-up");

}


/* Observador */

const revealObserver = new IntersectionObserver(

    function(entries, observer){

        entries.forEach(function(entry){

            if(entry.isIntersecting){

                entry.target.classList.add("reveal-visible");

                // Para de observar depois que o elemento aparecer
                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold:0.15,
        rootMargin:"0px 0px -40px 0px"
    }

);


/* Começa a observar todos os elementos */

const revealElements = document.querySelectorAll(
    ".reveal-up, .reveal-left, .reveal-right, .reveal-scale"
);

revealElements.forEach(function(element){

    revealObserver.observe(element);

});
const galleryRevealCards = document.querySelectorAll(".gallery-card");

galleryRevealCards.forEach(function(card, index){

    const delay = (index % 3) * 120;

    card.style.transitionDelay = delay + "ms";

});


const testimonialRevealCards = document.querySelectorAll(
    ".testimonial-card"
);

testimonialRevealCards.forEach(function(card, index){

    card.style.transitionDelay = (index * 150) + "ms";

});


const contactRevealItems = document.querySelectorAll(".contact-item");

contactRevealItems.forEach(function(item, index){

    item.style.transitionDelay = (index * 120) + "ms";

});
/* ==================================
   NAVBAR INTELIGENTE
================================== */

const header = document.querySelector("header");

function atualizarNavbar(){

    if(window.scrollY > 60){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

}

window.addEventListener("scroll", atualizarNavbar);

atualizarNavbar();

/* ==================================
   LOADER DE ENTRADA
================================== */

const pageLoader = document.querySelector("#page-loader");

function removerLoader(){

    if(!pageLoader){
        return;
    }

    pageLoader.classList.add("hidden");

    document.body.classList.remove("loading");

    setTimeout(function(){

        pageLoader.remove();

    }, 700);

}

window.addEventListener("load", function(){

    // Pequeno tempo para o loader ser percebido
    setTimeout(removerLoader, 900);

});

// Segurança: remove mesmo se algum recurso externo demorar
setTimeout(removerLoader, 3500);