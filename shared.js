let backdrop = document.querySelector('.backdrop');
let modal = document.querySelector('.modal-pag');
let selectLeeFragmento = document.querySelector('.read');
let selectComprar = document.querySelector('##comprarButton')
let selectCloseButton = document.querySelector('.close');

selectLeeFragmento.addEventListener('click', function() {
    backdrop.style.display = "block";
    modal.style.display = "grid";
});

selectComprar.addEventListener('click', function() {
    fbq('track', 'Purchase', {currency: "USD", value: 4.99});
});

backdrop.addEventListener('click', closeModal);
selectCloseButton.addEventListener('click', closeModal);

function closeModal(){
    backdrop.style.display = "none";
    modal.style.display = "none";
}



