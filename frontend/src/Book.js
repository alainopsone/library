/* eslint-disable accessor-pairs */
export default class Book {
  constructor({ title, author, page, read } = {}) {
    this.id = `book-${Date.now()}${Math.floor(Math.random() * 100)}`
    this.title = title
    this.author = author
    this.page = page
    this.read = read
  }

  get cardElement() { return document.getElementById(this.id) }
  get title() { return this._title }
  get author() { return this._author }
  get page() { return this._page }
  get read() { return this._read }

  set title(value) {
    this._title = value || '...'

    if (this.cardElement) {
      this.cardElement.querySelector('[data-book-title]').textContent = this._title
    }
  }

  set author(value) {
    this._author = value || '...'

    if (this.cardElement) {
      this.cardElement.querySelector('[data-book-author]').textContent = this._author
    }
  }

  set page(value) {
    this._page = value || '...'

    if (this.cardElement) {
      this.cardElement.querySelector('[data-book-page]').textContent = this._page
    }
  }

  set read(value) {
    this._read = value || '...'

    if (this.cardElement) {
      this.cardElement.querySelector('[data-book-read]').textContent = this._read
    }
  }
}
