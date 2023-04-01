const closeAddBook = document.querySelector('#close-add-book');
const openAddBook = document.querySelector('#open-add-book');
const curtain = document.querySelector('.curtain');

openAddBook.addEventListener('click', () => {
    curtain.classList.toggle('hidden');
});

closeAddBook.addEventListener('click', () => {
    curtain.classList.toggle('hidden');
});

let myLibrary = [];

function createBookEntry(title, author, percent) {
    const mainDiv = document.getElementsByTagName('main')[0];
    const bookDiv = document.createElement('div');
    mainDiv.appendChild(bookDiv);
    bookDiv.setAttribute('class', 'book');

    const bookmarkDiv = document.createElement('img');
    bookDiv.appendChild(bookmarkDiv);
    bookmarkDiv.setAttribute('class', 'bookmark btn');
    bookmarkDiv.setAttribute('src', 'assets/icon-bookmark.svg');

    const titleDiv = document.createElement('h2');
    bookDiv.appendChild(titleDiv);
    titleDiv.textContent = title;
    const authorDiv = document.createElement('h3');
    bookDiv.appendChild(authorDiv);
    authorDiv.textContent = author;

    const commentsDiv = document.createElement('div');
    bookDiv.appendChild(commentsDiv);
    commentsDiv.setAttribute('class', 'comments');

    const percentDiv = document.createElement('h4');
    commentsDiv.appendChild(percentDiv);
    percentDiv.textContent = percent + '% complete';

    const trashDiv = document.createElement('img');
    commentsDiv.appendChild(trashDiv);
    trashDiv.setAttribute('src', 'assets/icon-trash-off.svg');
    trashDiv.setAttribute('class', 'btn');
}

function Book(title, author, percent) {
    this.title = title;
    this.author = author;
    this.percent = percent;
}

for (let i = 0; i <= 10; i++) {
    createBookEntry('Lord of the rings', 'J. R. R. Tolkien', '100');
}
