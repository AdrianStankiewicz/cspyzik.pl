function smoothScroll(where) {
    document.querySelector(where).scrollIntoView({
        behavior: 'smooth'
    });
};