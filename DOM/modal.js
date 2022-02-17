const button = document.getElementById('openModal');
const modalWrapper = document.querySelector('.modal-wrapper');
button.addEventListener('click', remove);

function remove() {
modalWrapper.classList.remove('invisible');
}



document.addEventListener('keydown', function(event) {
    const escPressed = event.key === "Escape" && !modalWrapper.classList.contains('invisible');
    if(escPressed) {
        modalWrapper.classList.add('invisible');       

    }
})

