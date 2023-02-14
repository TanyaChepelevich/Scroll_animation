const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', slideIn);

slideIn();

function slideIn () { 

    const triggerHeight = window.screen.height * 0.8;

    boxes.forEach(box => {
        const top = box.getBoundingClientRect().top;

        if (top < triggerHeight) {
        box.classList.add('active');
        } else {
        box.classList.remove('active');
        }
    })
}

// bounding client rect is changing when document is scrolled.