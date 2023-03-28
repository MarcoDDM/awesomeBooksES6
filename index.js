import BookList from "./modules/BookList.js";
import navigation from './modules/navigation.js';
import { DateTime } from "luxon";

function displayDate() {
  const currentDate = DateTime.local().toLocaleString(DateTime.DATE_FULL);
  const dateEl = document.getElementById('date');
  dateEl.textContent = currentDate;
}

window.addEventListener('load', displayDate);


const bookList = new BookList();
