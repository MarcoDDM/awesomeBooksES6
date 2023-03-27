export default class Book {
  constructor(title, author, removeCallback) {
    this.title = title;
    this.author = author;
    this.removeCallback = removeCallback;
  }

  remove() {
    this.removeCallback();
  }
}
