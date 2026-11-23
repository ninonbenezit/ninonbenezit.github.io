const links = [...document.querySelectorAll('.gallery a')];
const lightbox = document.querySelector('.lightbox');
const image = lightbox.querySelector('img');
const caption = lightbox.querySelector('figcaption');
let current = 0;

function show(index) {
  current = (index + links.length) % links.length;
  const thumbnail = links[current].querySelector('img');
  image.src = links[current].href;
  image.alt = thumbnail.alt;
  caption.textContent = thumbnail.alt;
}

links.forEach((link, index) => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Sans JavaScript, le lien ouvre simplement l'image.
    show(index);
    lightbox.showModal();
  });
});

lightbox.querySelector('.prev').addEventListener('click', () => show(current - 1));
lightbox.querySelector('.next').addEventListener('click', () => show(current + 1));
lightbox.querySelector('.close').addEventListener('click', () => lightbox.close());

lightbox.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') show(current - 1);
  if (event.key === 'ArrowRight') show(current + 1);
});