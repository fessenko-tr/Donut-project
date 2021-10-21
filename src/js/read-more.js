const refs = {
    readMoreBtn: [...document.querySelectorAll('.read-more-btn')],
}

refs.readMoreBtn.forEach(e => {
    e.addEventListener('click', (e) => {
        const target = e.target;
        if (target.textContent === 'Read more') {
            target.textContent = 'Less';
        } else {
            target.textContent = 'Read more';
        }
        target.previousElementSibling.classList.toggle('read-more-open');
    })
})


