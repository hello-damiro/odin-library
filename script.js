function createBookEntry(title, author, percent) {
    const mainDiv = document.getElementsByTagName('main')[0];
    const bookDiv = document.createElement('div');
    mainDiv.appendChild(bookDiv);
    bookDiv.setAttribute('class', 'book');

    const bookmarkDiv = document.createElement('img');
    bookDiv.appendChild(bookmarkDiv);
    bookmarkDiv.setAttribute('class', 'bookmark');
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
}

createBookEntry('Lord of the rings', 'J. R. R. Tolkien', '100');
