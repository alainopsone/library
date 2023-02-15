export default class Book {
  constructor(infos) {
    this.infos = {
      id: `book-${Date.now()}${Math.floor(Math.random() * 100)}`
    }

    Object.entries(infos).forEach(([key, value]) => {
      this.infos[key] = value
    })
  }

  get cardElement() { return document.getElementById(this.infos.id) }

  set title(value) {
    this.cardElement.querySelector('[data-book-title]').textContent = `Title: ${value || '...'}`
  }

  set author(value) {
    this.cardElement.querySelector('[data-book-author]').textContent = `Author: ${value || '...'}`
  }

  set page(value) {
    this.cardElement.querySelector('[data-book-page]').textContent = `Page: ${value || '...'}`
  }

  set read(value) {
    this.cardElement.querySelector('[data-book-read]').textContent = `Read: ${value ? 'Yes' : 'No'}`
  }
}