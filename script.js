// Fonction pour fermer la nav apres un click sur un lien
document.querySelectorAll('.offcanvas-body .nav-link').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.btn-close').click();
  });
});



// Fonction pour vérifier si l'élément est dans le viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Écouter l'événement de scroll
window.addEventListener('scroll', () => {
  document.querySelectorAll('.img-model').forEach((img) => {
    if (isInViewport(img)) {
      img.classList.add('blurred');
    } else {
      img.classList.remove('blurred');
    }
  });
});
 