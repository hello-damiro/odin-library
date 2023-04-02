const closeAddBookPanel = document.querySelector('#close-add-book');
const openAddBookPanel = document.querySelector('#open-add-book');
const addBookPanel = document.querySelector('.add-book-curtain');

openAddBookPanel.addEventListener('click', () => {
    addBookPanel.classList.toggle('hidden');
});

closeAddBookPanel.addEventListener('click', () => {
    addBookPanel.classList.toggle('hidden');
});

const submitBtn = document.querySelector('#submit');

submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
});

const books = document.querySelectorAll('.book');
books.forEach((book) => {
    book.addEventListener('mouseover', () => {
        const trash = book.querySelectorAll('.comments img');
        trash.classList.add('hidden');
    });
});

function createBookEntry(title, author, percent) {
    const mainDiv = document.getElementsByTagName('main')[0];
    const bookDiv = document.createElement('div');
    mainDiv.appendChild(bookDiv);
    bookDiv.setAttribute('class', 'book');

    const bookmarkDiv = document.createElement('img');
    bookDiv.appendChild(bookmarkDiv);
    bookmarkDiv.setAttribute('class', 'bookmark btn');
    bookmarkDiv.setAttribute('src', 'assets/icon-bookmark.svg');

    const bookDetailsDiv = document.createElement('div');
    bookDiv.appendChild(bookDetailsDiv);

    const titleDiv = document.createElement('h2');
    bookDetailsDiv.appendChild(titleDiv);
    titleDiv.textContent = title;
    const authorDiv = document.createElement('h3');
    bookDetailsDiv.appendChild(authorDiv);
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

let myLibrary = [
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', percent: '100' },
    { title: '1984', author: 'George Orwell', percent: '65' },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', percent: '36' },
    { title: 'Pride and Prejudice', author: 'Jane Austen', percent: '23' },
    { title: 'One Hundred Years of Solitude', author: 'Gabriel García Márquez', percent: '76' },
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger', percent: '75' },
    { title: 'Animal Farm', author: 'George Orwell', percent: '27' },
    { title: 'Brave New World', author: 'Aldous Huxley', percent: '93' },
    { title: 'The Picture of Dorian Gray', author: 'Oscar Wilde', percent: '48' },
    { title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', percent: '63' },
];

function renderLibrary() {
    for (let i = 0; i <= myLibrary.length; i++) {
        createBookEntry(myLibrary[i].title, myLibrary[i].author, myLibrary[i].percent);
    }
}

function Book(title, author, percent) {
    this.title = title;
    this.author = author;
    this.percent = percent;
}

renderLibrary();
