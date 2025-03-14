// MENU TOGGLE
const openMenu = () => {
    let menu = document.querySelector('.nav-menu')

    menu.classList.add('menu-opened')
}

const closeMenu = () => {
    let menu = document.querySelector('.nav-menu')

    menu.classList.remove('menu-opened')
}

const links = document.querySelectorAll('.nav-link')
links.forEach(link => link.addEventListener('click', closeMenu))

document.querySelector('.menu-opener').addEventListener('click', openMenu)
document.querySelector('.nav-close').addEventListener('click', closeMenu)

// BACKGROUND HEADER

window.addEventListener('scroll', () => {
    let header = document.querySelector('.header')

    if(window.scrollY >= 30){
        header.classList.add('background-header')
    } else{
        header.classList.remove('background-header')
    }
})


// WORKERS LIST

const workersContainer = document.querySelector(".workers-items");
const filterSelect = document.getElementById("filter");

// Função para renderizar os workers filtrados
function renderWorkers(filter = "all") {
    workersContainer.innerHTML = ""; // Limpa os trabalhadores atuais

    workers
        .filter(worker => filter === "all" || worker.role === filter) // Filtra os workers
        .forEach(worker => {
            const workerDiv = document.createElement("div");
            workerDiv.classList.add("worker-item");

            workerDiv.innerHTML = `
                <div class="worker-img" style="background-image: url('${worker.image}');"></div>
                <h4>${worker.name}</h4>
                <h5>${worker.role}</h5>
                <div class="worker-social">
                    <a href="${worker.linkedin}" target="_blank" class="linkedin-icon">
                        <i class='bx bxl-linkedin-square'></i>
                    </a>
                    <a href="${worker.github}" target="_blank" class="github-icon">
                        <i class='bx bxl-github'></i>
                    </a>
                </div>
            `;

            workersContainer.appendChild(workerDiv);
        });
}

// Evento para filtrar ao selecionar uma opção no <select>
filterSelect.addEventListener("change", (event) => {
    renderWorkers(event.target.value);
});

// Renderiza todos os trabalhadores inicialmente
renderWorkers();


// SCROLL REVEAL

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400
})

sr.reveal('.img-banner, .how-it-item', {origin: 'left'})
sr.reveal('.banner-title, .where-it-item', {origin: 'right'})
sr.reveal('.section3-items, .workers-items, .techs-items, .footer-content', { interval: 100 })


// SWIPPER

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: true,
  
    // Navigation arrows
    

  });