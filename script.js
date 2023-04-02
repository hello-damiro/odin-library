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

const mainDiv = document.querySelector('main');
const newBookTitle = document.querySelector('#new-title');
const newBookAuthor = document.querySelector('#new-author');
const closeAddBookPanel = document.querySelector('#close-add-book');
const openAddBookPanel = document.querySelector('#open-add-book');
const addBookPanel = document.querySelector('.add-book-curtain');
const submitBtn = document.querySelector('#submit');

openAddBookPanel.addEventListener('click', () => {
    addBookPanel.classList.toggle('hidden');
});

closeAddBookPanel.addEventListener('click', () => {
    newBookTitle.value = '';
    newBookAuthor.value = '';
    addBookPanel.classList.toggle('hidden');
});

function renderBookEntry(title, author, percent) {
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
    trashDiv.setAttribute('class', 'delete btn');
}

function Book(title, author, percent) {
    this.title = title;
    this.author = author;
    this.percent = percent;
}

function renderLibrary() {
    myLibrary.forEach((book) => {
        renderBookEntry(book.title, book.author, book.percent);
    });
}

const isRequired = (value) => (value === '' ? false : true);
const isBetween = (length, min, max) => (length < min || length > max ? false : true);

const showError = (input, message) => {
    // add the error class
    input.classList.add('error');

    // show the error message
    const errorField = input.parentElement;
    const error = errorField.querySelector('.alert');
    error.textContent = message;
};

const showSuccess = (input) => {
    // add the error class
    input.classList.remove('error');

    // show the error message
    const errorField = input.parentElement;
    const error = errorField.querySelector('.alert');
    error.textContent = '';
};

const checkTitle = () => {
    let valid = false;
    const min = 1,
        max = 99;
    const title = newBookTitle.value.trim();
    if (!isRequired(title)) {
        showError(newBookTitle, 'Title required');
    } else if (!isBetween(title.length, min, max)) {
        showError(newBookTitle, `Title must be between ${min} and ${max} characters.`);
    } else {
        showSuccess(newBookTitle);
        valid = true;
    }
    return valid;
};

const checkAuthor = () => {
    let valid = false;
    const min = 1,
        max = 99;
    const author = newBookAuthor.value.trim();
    if (!isRequired(author)) {
        showError(newBookAuthor, 'Author required');
    } else if (!isBetween(author.length, min, max)) {
        showError(newBookAuthor, `Author must be between ${min} and ${max} characters.`);
    } else {
        showSuccess(newBookAuthor);
        valid = true;
    }
    return valid;
};

submitBtn.addEventListener('click', (event) => {
    event.preventDefault();

    let isTitleValid = checkTitle();
    let isAuthorValid = checkAuthor();

    let isFormValid = isTitleValid && isAuthorValid;
    if (isFormValid) {
        console.log('SUCCESS');
        createBook();
    }
});

function createBook() {
    const title = newBookTitle.value.trim();
    const author = newBookAuthor.value.trim();
    const percent = Math.round(Math.random() * 100);
    const newBook = new Book(title, author, percent);
    console.log(newBook);
    myLibrary.push(newBook);

    mainDiv.textContent = '';
    newBookTitle.value = '';
    newBookAuthor.value = '';
    renderLibrary();
    applyTrashButtons();
}

function deleteBook(index) {
    myLibrary.splice(index, 1);
    mainDiv.textContent = '';
    renderLibrary();
    applyTrashButtons();
}

function applyTrashButtons() {
    const trashButtons = document.querySelectorAll('.delete');
    trashButtons.forEach((trash, index) => {
        trash.addEventListener('click', () => {
            deleteBook(index);
        });
    });
}

renderLibrary(); // Initialize
applyTrashButtons();
