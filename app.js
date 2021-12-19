const container = document.querySelector('.container');
const library = document.querySelector('.library')
const newTitle = document.querySelector('#title');
const newAuthor = document.querySelector('#author');
const newPageCount = document.querySelector('#pageCount')
const readStatus = document.querySelector('#isRead')
const addBtn = document.querySelector('#add')
const submitCard = document.querySelector('.submitCard')
const submitBtn = document.querySelector('#submit')
let bookNum = 0;
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
  {
    title: 'World War Pee',
    author: 'Min Brooks',
    pageCount: 23,
    read: true,
  }
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

Book.prototype.changeRead = function() {
  if (this.read) {
    this.read = false;
  } else {
    this.read = true;
  }
}


function getBookInfo() {
    let title = newTitle.value;
    let author = newAuthor.value;
    let pageCount = newPageCount.value;
    let isRead = readStatus.checked;
    // let bookPages = newPageCount;
    return new Book(title, author, pageCount, isRead);
}
// function updateReadStatus(book, isNew ) {  
//   if (isNew) {

//   }
//   else {
//     if (book.read) {
//       isRead.textContent = 'Not Red';
//       isRead.style.color = 'red';
//     }else {
//       isRead.textContent = 'Read';
//       isRead.style.color = 'blue';
//     }
//   }
// }
function buildBookCard(newBook) {
  bookCard = document.createElement('div');
  bookCard.classList.add('bookCard');
  bookCard.setAttribute("data-attribute", bookNum)
  bookNum++;

  title = document.createElement('h3');
  title.classList.add('bookTitle');
  author = document.createElement('h3');
  author.classList.add('bookAuthor');
  pageCount = document.createElement('h3');
  pageCount.classList.add("bookPageCount");
  isRead = document.createElement('button');
  isRead.classList.add('btn');
  isRead.classList.add('read');
  deleteBtn = document.createElement('i');
  deleteBtn.classList.add('far');
  deleteBtn.classList.add('fa-trash-alt')
  deleteBtn.classList.add('fa-2x')
  deleteBtn.classList.add('btn')
  title.textContent = (newBook.title)
  author.textContent = (newBook.author);
  pageCount.textContent = (newBook.pageCount + ' pages');
  isRead.textContent = newBook.read;
  // updateReadStatus(newBook);
  if (newBook.read) {
    isRead.textContent = 'Read';
    isRead.style.backgroundColor = '#99E1D9';
  }
  else {
    isRead.textContent = 'Not Read';
    isRead.style.backgroundColor = '#F7567C';
  }
  bookCard.append(title, author, pageCount, isRead, deleteBtn);
  deleteBtn.addEventListener('click', () => {
    let book = deleteBtn.parentNode;
    library.removeChild(book);
  })
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
// This prints the library already in place
myLibrary.forEach(book => {
  buildBookCard(book);
  library.appendChild(bookCard);
});

addBtn.addEventListener("click", (e) => {
  submitCard.classList.add('active')
})

submitBtn.addEventListener('click', () => {
  addBookToLibrary();
  submitCard.classList.remove('active');
})

readStatusBtn = document.querySelectorAll('.read');
readStatusBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    reference = btn.parentNode.getAttribute('date-attribute');
    // updateReadStatus(btn, false);
    console.log(reference);
    
  })
})
deleteBtns = document.querySelectorAll(".fa-trash-alt")
deleteBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    let book = btn.parentNode;
    console.log(book);
    console.log(btn);
    library.removeChild(book);
  })
})

