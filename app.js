const container = document.querySelector('.container');
const library = document.querySelector('.library')
const newTitle = document.querySelector('#title');
const newAuthor = document.querySelector('#author');
const newPageCount = document.querySelector('#pageCount')
const readStatus = document.querySelector('#isRead')
const addBtn = document.querySelector('#add')
const submitCard = document.querySelector('.submitCard')
const submitBtn = document.querySelector('#submit')

let myLibrary = [
  {
    title: "Harry Pooper",
    author: 'Just Kidding Rowling',
    pageCount: 69,
    read: true,
  },
  {
    title: 'Lort of the Rings',
    author: 'Tolken Black',
    pageCount: '420',
    read: false,
  },
  {
    title: 'Dick in a dick',
    author: 'Richard',
    pageCount: 80085,
    read: false,
  },
];

function Book(title, author, pageCount, isRead) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pageCount = pageCount;
  this.read = isRead;
}

Book.prototype.info = function() {
    console.log('Title: ' + this.title + ' Author: ' + this.author);
}

Book.prototype.edit = function() {
  // get new info from user and update the book card
}

function getBookInfo() {
    let title = newTitle.value;
    let author = newAuthor.value;
    let pageCount = newPageCount.value;
    let isRead = readStatus.checked;
    // let bookPages = newPageCount;
    return new Book(title, author, pageCount, isRead);
}
function buildBookCard(newBook) {
  bookCard = document.createElement('div');
  bookCard.classList.add('bookCard');
  title = document.createElement('h3');
  author = document.createElement('h3');
  title.textContent = ('\"' + newBook.title + "\"")
  author.textContent = (newBook.author);
  bookCard.appendChild(title);
  bookCard.appendChild(author);
}
function addBookToLibrary() {
  // do stuff here
  let newBook = getBookInfo()
  buildBookCard(newBook);
  myLibrary.push(newBook);
  library.appendChild(bookCard);
}

function updateLibrary(newLibrary){

}
myLibrary.forEach(book => {
  bookCard = document.createElement('div');
  bookCard.classList.add('bookCard');
  library.appendChild(bookCard);
  title = document.createElement('h3');
  author = document.createElement('h3');
  title.textContent = ('\"' + book.title + "\"")
  author.textContent = (book.author);
  bookCard.appendChild(title);
  bookCard.appendChild(author);
});

addBtn.addEventListener("click", (e) => {
  submitCard.classList.add('active')
})

submitBtn.addEventListener('click', () => {
  addBookToLibrary();
  submitCard.classList.remove('active');
})

console.log(myLibrary);
console.log(newTitle.value)
