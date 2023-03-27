import BookList from "./modules/BookList.js";
import navigation from './modules/navigation.js';
import displayDate from './modules/displayDate.js';

window.addEventListener('load', displayDate);

const bookList = new BookList();
