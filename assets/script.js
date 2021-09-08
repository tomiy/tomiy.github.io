window.addEventListener("load", _ => {
    logo.classList.add('animateEnd');
    presentation.classList.add('animateEnd');
    document.querySelectorAll('.link').forEach(link => link.classList.add('animateEnd'));

    logo.addEventListener("click", _ => {
        logo.classList.remove('animateEnd');
        setTimeout(_ => logo.classList.add('animateEnd'), 2000);
    });
});