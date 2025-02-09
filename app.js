// Función para mostrar u ocultar el menú lateral en móviles
function toggleMenu() {
    let menu = document.getElementById("mobileMenu"); // Obtiene el menú por su ID

    // Si el menú está visible (posición `right` en 0px), lo oculta
    if (menu.style.right === "0px") {
        menu.style.right = "-250px"; // Mueve el menú fuera de la pantalla
    } else {
        menu.style.right = "0px"; // Muestra el menú deslizándolo dentro de la pantalla
    }
}

// Ejecuta el código cuando el DOM se ha cargado completamente
document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider2"); // Selecciona el contenedor del slider
    const cards = document.querySelectorAll(".card-section4"); // Selecciona todas las tarjetas del slider
    const prevBtn = document.querySelector(".prev"); // Botón para ir a la diapositiva anterior
    const nextBtn = document.querySelector(".next"); // Botón para ir a la diapositiva siguiente

    let index = 0; // Índice de la tarjeta actual
    let autoSlide; // Variable para almacenar el intervalo del auto-slide

    // Función para actualizar la posición del slider
    function updateSlide() {
        let translateX = -index * (cards[0].offsetWidth + 20); // Calcula el desplazamiento en el eje X
        slider.style.transform = `translateX(${translateX}px)`; // Aplica la transformación al slider
    }

    // Función para avanzar al siguiente slide
    function nextSlide() {
        index++; // Incrementa el índice
        // Si el índice supera el número de tarjetas visibles, reinicia al inicio
        if (index > cards.length - Math.floor(slider.offsetWidth / (cards[0].offsetWidth + 20))) {
            index = 0; // Vuelve a la primera tarjeta
        }
        updateSlide(); // Aplica la actualización de posición
    }

    // Función para retroceder al slide anterior
    function prevSlide() {
        index--; // Decrementa el índice
        // Si el índice es menor que 0, vuelve a la última tarjeta visible
        if (index < 0) {
            index = cards.length - Math.floor(slider.offsetWidth / (cards[0].offsetWidth + 20));
        }
        updateSlide(); // Aplica la actualización de posición
    }

    // Función para iniciar el auto-slide cada 3 segundos
    function startAutoSlide() {
        autoSlide = setInterval(nextSlide, 3000);
    }

    // Función para detener el auto-slide
    function stopAutoSlide() {
        clearInterval(autoSlide);
    }

    // Evento al hacer clic en el botón "Siguiente"
    nextBtn.addEventListener("click", () => {
        stopAutoSlide(); // Detiene el auto-slide temporalmente
        nextSlide(); // Muestra el siguiente slide
        startAutoSlide(); // Reactiva el auto-slide
    });

    // Evento al hacer clic en el botón "Anterior"
    prevBtn.addEventListener("click", () => {
        stopAutoSlide(); // Detiene el auto-slide temporalmente
        prevSlide(); // Muestra el slide anterior
        startAutoSlide(); // Reactiva el auto-slide
    });

    // Variables para controlar el deslizamiento táctil (Swipe en móviles)
    let touchStartX = 0;
    let touchEndX = 0;

    // Captura el inicio del toque en la pantalla (posición X)
    slider.addEventListener("touchstart", (e) => {
        touchStartX = e.touches[0].clientX; // Guarda la posición inicial del toque
        stopAutoSlide(); // Detiene el auto-slide mientras el usuario interactúa
    });

    // Captura el final del toque y llama a la función de manejo de swipe
    slider.addEventListener("touchend", (e) => {
        touchEndX = e.changedTouches[0].clientX; // Guarda la posición final del toque
        handleSwipe(); // Llama a la función que decide si es swipe izquierdo o derecho
        startAutoSlide(); // Reactiva el auto-slide
    });

    // Función que maneja el swipe en móviles
    function handleSwipe() {
        let swipeDistance = touchEndX - touchStartX; // Calcula la distancia del swipe
        if (swipeDistance > 50) {
            prevSlide(); // Si el swipe es hacia la derecha, retrocede
        } else if (swipeDistance < -50) {
            nextSlide(); // Si el swipe es hacia la izquierda, avanza
        }
    }

    // Inicia el auto-slide al cargar la página
    startAutoSlide();
});

 
    let index = 0;

    function showReview() {
      const reviews = document.getElementById('reviews');
      const reviewWidth = reviews.children[0].offsetWidth + 20; // width + margin
      reviews.style.transform = `translateX(-${index * reviewWidth}px)`;
    }

    function nextReview() {
      const reviews = document.getElementById('reviews');
      const totalVisible = Math.floor(document.querySelector('.reviews-container').offsetWidth / (reviews.children[0].offsetWidth + 20));
      const totalReviews = reviews.children.length;

      if (index >= totalReviews - totalVisible) {
        index = 0;
      } else {
        index++;
      }
      showReview();
    }

    setInterval(nextReview, 3000);

    window.addEventListener('resize', showReview);

    document.addEventListener('DOMContentLoaded', () => {
        const elements = document.querySelectorAll('.scroll-hidden');
    
        const showOnScroll = () => {
            elements.forEach(element => {
                const rect = element.getBoundingClientRect();
                if (rect.top <= window.innerHeight - 100) {  // Cuando el elemento está a 100px del viewport
                    element.classList.add('scroll-show');
                }
            });
        };
    
        // Detectar scroll y cargar cuando la página está lista
        window.addEventListener('scroll', showOnScroll);
        showOnScroll(); // Para cargar elementos que ya están en vista al refrescar la página
    });
    

