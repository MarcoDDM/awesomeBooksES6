import { DateTime } from 'luxon/src/luxon.js';
import BookList from './modules/BookList.js';
import navigation from './modules/navigation.js';

function displayDate() {
  const currentDate = DateTime.local().toLocaleString(DateTime.DATE_FULL);
  const dateEl = document.getElementById('date');
  dateEl.textContent = currentDate;
}

window.addEventListener('load', displayDate);

window.addEventListener('load', navigation);

const bookList = new BookList();
export default bookList;
