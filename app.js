const container = document.querySelector('.container');
const library = document.querySelector('.library')
const newTitle = document.querySelector('#title');
const newAuthor = document.querySelector('#author');
const newPageCount = document.querySelector('#pageCount');
const readStatus = document.querySelector('#isRead');
const addBtn = document.querySelector('#add');
const submitCard = document.querySelector('.submitCard');
const submitBtn = document.querySelector('#submit');
const filter = document.getElementById('filter');
const overlay = document.querySelector('.overlay')

let bookNum = 0;
let myLibrary = [];

class Book {
  constructor(title, author, pageCount, isRead) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.read = isRead;
  }
  edit() { 
  }
  changeRead(readBtn) {
    if (this.read) {
      this.read = false;
      readBtn.classList.remove('blue');
      readBtn.classList.add('red');
      // readBtn.style.backgroundColor = '#F7567C';
      readBtn.textContent = 'Not Read';
    } else {
      this.read = true;
      readBtn.classList.remove('red');
      readBtn.classList.add('blue')
      // readBtn.style.backgroundColor = '#99E1D9';
      readBtn.textContent = 'Read';
    }
  }
}

// Event listeners
addBtn.addEventListener("click", (e) => {
  submitCard.classList.add('active');
  overlay.classList.add('active');
})

submitBtn.addEventListener('click', (e) => {
  addBookToLibrary(e);
  submitCard.classList.remove('active');
  overlay.classList.remove('active')
  clearSubmitForms();
})

library.addEventListener('click', removeItem);
library.addEventListener('click', toggleRead);
filter.addEventListener('keyup', filterItems);
overlay.onclick = function closeOverlay() {
  submitCard.classList.remove('active');
  overlay.classList.remove('active');
}

function updateAttritube(ref) {
  let books = library.getElementsByTagName('div');
  Array.from(books).forEach(book => {
    let indexNum = myLibrary.indexOf(ref);
    if (book.getAttribute('data-attribute') <= indexNum) {

    }else {
      let bookAttr = book.getAttribute('data-attribute');
      bookAttr--;
      book.setAttribute('data-attribute', bookAttr);
    }
  })
}
function toggleRead(e) {  
  if(e.target.classList.contains('read')) {
    let readBtn = e.target;
    let ref = readBtn.parentElement;
    ref = ref.getAttribute('data-attribute');
    let book = myLibrary[ref];
    book.changeRead(readBtn);
  }
}
function removeItem(e) {
  if(e.target.classList.contains('fa-trash-alt')) {
    let book = e.target.parentElement;
    library.removeChild(book);
    let ref = book.getAttribute('data-attribute');
    myLibrary.splice(ref, 1);
    ref = myLibrary[ref];
    updateAttritube(ref);
    
  }
}
// print books already there
// function drawLibrary(){
//   myLibrary.forEach(book => {
//     let bookCard = buildBookCard(book);
//     bookCard.setAttribute("data-attribute", bookNum);
//     bookNum++;
//     library.appendChild(bookCard);
//   });
// }
function addBookToLibrary() {
  // e.preventDefault()
  let newBook = getBookInfo();
  let bookCard = buildBookCard(newBook);
  myLibrary.push(newBook);
  library.appendChild(bookCard);
}
function getBookInfo() {
    let title = newTitle.value;
    let author = newAuthor.value;
    let pageCount = newPageCount.value;
    let isRead = readStatus.checked;
    return new Book(title, author, pageCount, isRead);
}
function buildBookCard(book) {
    // make book card
    let bookCard = document.createElement('div');
    bookCard.classList.add('bookCard');
    bookCard.setAttribute("data-attribute", getBookNum());
    
    // make elements
    let title = document.createElement('h3');
    title.classList.add('bookTitle');

    let author = document.createElement('h3');
    author.classList.add('bookAuthor');

    let pageCount = document.createElement('h3');
    pageCount.classList.add("bookPageCount");

    let readBtn = document.createElement('button');
    readBtn.classList.add('btn', 'read');

    let deleteBtn = document.createElement('i');
    deleteBtn.classList.add('far', 'fa-trash-alt', "fa-2x", 'btn');

    // set values
    title.textContent = (book.title);
    author.textContent = (book.author);
    pageCount.textContent = (book.pageCount + ' pages');
    readBtn.textContent = book.read;

    // setReadStatus();
    if (book.read) {
      readBtn.classList.add('blue');
      readBtn.textContent = 'Read';
    }
    else {
      readBtn.classList.add('red')
      readBtn.textContent = 'Not Read';
    }
    
    bookCard.append(title, author, pageCount, readBtn, deleteBtn);
    return bookCard;
  }
  function getBookNum() {
    return myLibrary.length;
  }
function clearSubmitForms() {
  newTitle.value = '';
  newAuthor.value = '';
  newPageCount.value = '';
  readStatus.checked = '';
}
function filterItems(e) {
  let text = e.target.value.toLowerCase();
  let books = library.getElementsByTagName('div');
  Array.from(books).forEach(function(book) {
    let bookTitle = book.firstChild.textContent;
    if(bookTitle.toLowerCase().indexOf(text) != -1) {
      book.style.display = "flex";
    } else {
      book.style.display = 'none';
    }
  })
}
// // This prints the library already in place
// drawLibrary();
