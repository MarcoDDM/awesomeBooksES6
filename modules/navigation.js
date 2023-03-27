const bookForm = document.getElementById('book-form');
const bookLists = document.getElementById('book-section');
const contact = document.getElementById('contact');

const add = document.getElementById('add');
const list = document.getElementById('list');
const contactInfo = document.getElementById('contact-info');

bookForm.style.display = 'flex';
bookLists.style.display = 'none';
contact.style.display = 'none';

add.addEventListener('click', () => {
  bookForm.style.display = 'flex';
  bookLists.style.display = 'none';
  contact.style.display = 'none';
});

list.addEventListener('click', () => {
  bookForm.style.display = 'none';
  bookLists.style.display = 'flex';
  contact.style.display = 'none';
});

contactInfo.addEventListener('click', () => {
  bookForm.style.display = 'none';
  bookLists.style.display = 'none';
  contact.style.display = 'flex';
});

export default {
  bookForm,
  bookLists,
  contact,
};
