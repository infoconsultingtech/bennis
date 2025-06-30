// Sélection des éléments du DOM
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

// Fonction pour le menu mobile (hamburger)
menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

// Fermer le menu si on clique sur un lien ou en dehors
window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};

// Optionnel : Ajoute un effet d'ombre au header lors du défilement
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 .2rem .5rem rgba(0,0,0,0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.9)';
        header.style.boxShadow = 'none';
    }
});

//image caroussel
document.addEventListener('DOMContentLoaded', function() {
            const carouselTrack = document.querySelector('.carousel-track');
            const modal = document.getElementById('imageModal');
            const modalImg = document.getElementById('modalImage');
            const closeBtn = document.querySelector('.close-btn');

            // Liste d'images (vous pouvez remplacer par vos propres URLs)
            const imageUrls = [
                'assets/images/groupebennis1.jpg?nature=1',
                'assets/images/groupebennis2.jpg?nature=1',
                'assets/images/groupebennis3.jpg?nature=1',
                'assets/images/groupebennis4.jpg?nature=1',
                'assets/images/groupebennis5.jpg?nature=1',
                'assets/images/groupebennis6.jpg?nature=1',
                'assets/images/groupebennis7.jpg?nature=1',
                'assets/images/groupebennis8.jpg?nature=1',
                'assets/images/groupebennis9.jpg?nature=1',
                'assets/images/groupebennis10.jpg?nature=1',
                'assets/images/groupebennis11.jpg?nature=1',
                'assets/images/groupebennis12.jpg?nature=1',
                'assets/images/groupebennis13.jpg?nature=1',
                'assets/images/groupebennis14.jpg?nature=1',
                'assets/images/groupebennis15.jpg?nature=1',
                'assets/images/groupebennis16.jpg?nature=1',
               
           
            ];

            // Dupliquer les images pour un défilement infini plus fluide
            const allImages = [...imageUrls, ...imageUrls];

            // Créer les éléments du carrousel
            allImages.forEach((imgUrl, index) => {
                const carouselItem = document.createElement('div');
                carouselItem.className = 'carousel-item';
                
                const img = document.createElement('img');
                img.className = 'carousel-img';
                img.src = imgUrl;
                img.alt = `Image ${index + 1}`;
                
                carouselItem.appendChild(img);
                carouselTrack.appendChild(carouselItem);

                // Ajouter l'événement de clic
                carouselItem.addEventListener('click', () => {
                    modal.style.display = 'flex';
                    modalImg.src = imgUrl;
                });
            });

            // Fermer la modal
            closeBtn.addEventListener('click', () => {
                modal.style.display = 'none';
            });

            // Fermer la modal en cliquant à l'extérieur de l'image
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.style.display = 'none';
                }
            });
        });

        // ======== SCRIPT POUR SECTION VISUALISATION 3D (Animation + Lightbox) ========
document.addEventListener('DOMContentLoaded', function() {
    
    const animatedSection = document.querySelector('#visualisation');

    if (animatedSection) {
        // --- 1. Animation au défilement ---
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target); 
                }
            });
        }, {
            threshold: 0.1
        });

        observer.observe(animatedSection);

        // --- 2. Fonctionnalité de clic pour plein écran (Lightbox) ---
        const galleryImages = animatedSection.querySelectorAll('.gallery-img');
        const modal = document.getElementById('imageModal'); // On récupère la modale existante
        const modalImg = document.getElementById('modalImage'); // On récupère l'image de la modale existante

        if (modal && modalImg) { // On vérifie que les éléments de la modale existent
            galleryImages.forEach(img => {
                img.addEventListener('click', () => {
                    modal.style.display = 'flex'; // Affiche la modale
                    modalImg.src = img.src; // Met la source de l'image cliquée dans la modale
                });
            });
        }
    }
});

  // Désactiver clic droit
  document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
  });

  // Désactiver sélection de texte
  document.addEventListener('selectstart', function(e) {
    e.preventDefault();
  });