const DEFAULT_INFO = {
  title: '',
  author: '',
  page: 0,
  read: false
}

export default class Book {
  constructor(infos) {
    Object.entries(infos).forEach(([key, value]) => {
      this[key] = value
    })

    this.selectors = {
      template: '[data-book-template]',
      bookList: '[data-books-list]',
      form: '[data-form]',
      title: '[data-form-title]',
      author: '[data-form-author]',
      page: '[data-form-page]',
      read: '[data-form-read]',
    }
  }

  set title(value) {
    this.selectors.title = value
  }

  set author(value) {
    this.selectors.author = value
  }

  set page(value) {
    this.selectors.page = value
  }

  set read(value) {
    this.selectors.read = value
  }

  get template() {
    return document.querySelector(this.selectors.template)
  }
}