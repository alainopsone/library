/* eslint-disable accessor-pairs */
export default class Book {
  constructor(infos) {
    this.infos = {
      id: `book-${Date.now()}${Math.floor(Math.random() * 100)}`
      // ...infos
    }

    Object.entries(infos).forEach(([key, value]) => {
      this.infos[key] = value
    })

    // this.id = `book-${Date.now()}${Math.floor(Math.random() * 100)}`
    // this.title = infos.title
    // this.author = infos.author
    // this.page = infos.page
    // this.read = infos.read
  }

  get cardElement() { return document.getElementById(this.infos.id) }

  set title(value) {
    this.cardElement.querySelector('[data-book-title]').textContent = `${value || '...'}`
  }

  set author(value) {
    this.cardElement.querySelector('[data-book-author]').textContent = `${value || '...'}`
  }

  set page(value) {
    this.cardElement.querySelector('[data-book-page]').textContent = `${value || '...'}`
  }

  set read(value) {
    this.cardElement.querySelector('[data-book-read]').textContent = `${value ? 'Yes' : 'No'}`
  }
}
