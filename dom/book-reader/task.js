let fontSize = Array.from(document.querySelectorAll('.font-size'));
let book = document.querySelector('.book');

fontSize.forEach((fs) => {
    fs.onclick = () => {
    let parentFs = fs.closest('.book__control_font-size');
    let fsActive = parentFs.querySelector('.font-size_active')
    fsActive.classList.remove('font-size_active');

    fs.classList.toggle('font-size_active');

    if(fs.classList.contains('font-size_small')){
        book.classList.remove('book_fs-big');
        book.classList.add('book_fs-small');        
    } else if(fs.classList.contains('font-size_big')){
        book.classList.remove('book_fs-small'); 
        book.classList.add('book_fs-big');
    } else {
        book.className = 'book';
    };   
        return false;
    };
});

