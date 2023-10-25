let backdrop = document.querySelector('.backdrop');
let modal = document.querySelector('.modal-pag');
let selectLeeFragmento = document.querySelector('.read');
let selectCloseButton = document.querySelector('.close');

selectLeeFragmento.addEventListener('click', function() {
    backdrop.style.display = "block";
    modal.style.display = "grid";
});

backdrop.addEventListener('click', closeModal);
selectCloseButton.addEventListener('click', closeModal);

function closeModal(){
    backdrop.style.display = "none";
    modal.style.display = "none";
}



