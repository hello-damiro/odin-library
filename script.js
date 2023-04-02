let myLibrary = [
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', status: true },
    { title: '1984', author: 'George Orwell', status: false },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', status: true },
    /* { title: 'Pride and Prejudice', author: 'Jane Austen', status: false },
    { title: 'One Hundred Years of Solitude', author: 'Gabriel García Márquez', status: true },
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger', status: true },
    { title: 'Animal Farm', author: 'George Orwell', status: true },
    { title: 'Brave New World', author: 'Aldous Huxley', status: true },
    { title: 'The Picture of Dorian Gray', author: 'Oscar Wilde', status: true },
    { title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', status: true }, */
];

const mainDiv = document.querySelector('main');
const newBookTitle = document.querySelector('#new-title');
const newBookAuthor = document.querySelector('#new-author');
const newBookStatus = document.querySelector('#finished-book');
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

function renderBookEntry(title, author, status) {
    const bookDiv = document.createElement('div');
    mainDiv.appendChild(bookDiv);
    bookDiv.setAttribute('class', 'book');

    const bookmarkDiv = document.createElement('img');
    bookDiv.appendChild(bookmarkDiv);
    bookmarkDiv.setAttribute('class', 'bookmark btn');
    bookmarkDiv.setAttribute('src', 'assets/icon-bookmark-off.svg');

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

    const statusDiv = document.createElement('h4');
    commentsDiv.appendChild(statusDiv);
    bookmarkDiv.setAttribute('src', 'assets/icon-bookmark-off.svg');

    const trashDiv = document.createElement('img');
    commentsDiv.appendChild(trashDiv);
    trashDiv.setAttribute('src', 'assets/icon-trash-off.svg');
    trashDiv.setAttribute('class', 'delete btn');
}

function Book(title, author, status) {
    this.title = title;
    this.author = author;
    this.status = status;
}

function renderLibrary() {
    myLibrary.forEach((book) => {
        renderBookEntry(book.title, book.author, book.status);
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
    const status = newBookStatus.checked;
    const newBook = new Book(title, author, status);
    myLibrary.push(newBook);

    mainDiv.textContent = '';
    newBookTitle.value = '';
    newBookAuthor.value = '';
    renderLibrary();
    applyTrashButtons();
    checkBookmark();
    toggleBookmark();
}

function deleteBook(index) {
    myLibrary.splice(index, 1);
    mainDiv.textContent = '';
    renderLibrary();
    applyTrashButtons();
    checkBookmark();
    toggleBookmark();
}

function applyTrashButtons() {
    const trashButtons = document.querySelectorAll('.delete');
    trashButtons.forEach((trash, index) => {
        trash.addEventListener('click', () => {
            deleteBook(index);
        });
    });
}

function checkBookmark() {
    const bookmarks = document.querySelectorAll('.bookmark');
    for (let i = 0; i < bookmarks.length; i++) {
        console.log(i + ': ' + myLibrary[i].status);
        if (myLibrary[i].status) {
            bookmarks[i].setAttribute('src', 'assets/icon-bookmark.svg');
        } else {
            bookmarks[i].setAttribute('src', 'assets/icon-bookmark-off.svg');
        }
    }
}

function toggleBookmark() {
    const bookmarks = document.querySelectorAll('.bookmark');
    bookmarks.forEach((bookmark, index) => {
        bookmark.addEventListener('click', () => {
            if (myLibrary[index].status) {
                myLibrary[index].status = false;
                bookmarks[index].setAttribute('src', 'assets/icon-bookmark-off.svg');
            } else {
                myLibrary[index].status = true;
                bookmarks[index].setAttribute('src', 'assets/icon-bookmark.svg');
            }
            console.table(myLibrary);
        });
    });
}

// Initialize
renderLibrary();
applyTrashButtons();
checkBookmark();
toggleBookmark();
