import Book from './Book.js'
import FormValidator from './FormValidator.js'

export default class Library {
  constructor() {
    this.selectors = {
      template: '[data-book-template]',
      bookList: '[data-books-list]',
      form: '[data-form]',
      title: '[data-form-title]',
      author: '[data-form-author]',
      page: '[data-form-page]',
      read: '[data-form-read]'
    }
  }

  get template() {
    return document.querySelector(this.selectors.template)
  }

  get bookList() {
    return document.querySelector(this.selectors.bookList)
  }

  get form() {
    return document.querySelector(this.selectors.form)
  }

  get title() {
    return this.form.querySelector(this.selectors.title)
  }

  get author() {
    return this.form.querySelector(this.selectors.author)
  }

  get page() {
    return this.form.querySelector(this.selectors.page)
  }

  get read() {
    return this.form.querySelector(this.selectors.read)
  }

  init() {
    this.addListeners()
    this.fetchBooks()
  }

  fetchBooks = async () => {
    try {
      // const response = await fetch('books.json') // ?? marche pas..
      const response = await fetch('../src/books.json')
      const books = await response.json()

      // books.map(this.addBook) // ERROR ??????
      books.map(this.addBook.bind(this))
    } catch (error) {
      console.error(error)
    }
  }

  addBook({ title = '', author = '', page = 0, read = false } = {}) {
    const book = new Book({ title, author, page, read })

    const templateContent = this.template.content

    templateContent.querySelector('[data-book-card]').id = book.infos.id
    templateContent.querySelector('[data-book-title]').textContent = book.infos.title
    templateContent.querySelector('[data-book-author]').textContent = book.infos.author
    templateContent.querySelector('[data-book-page]').textContent = book.infos.page
    templateContent.querySelector('[data-book-read]').textContent = book.infos.read

    this.bookList.appendChild(templateContent.cloneNode(true))

    book.title = book.infos.title
    book.author = book.infos.author
    book.page = book.infos.page
    book.read = book.infos.read
  }

  addListeners() {
    this.form.addEventListener('submit', this.onFormSubmit.bind(this))

    document.addEventListener('click', this.handleBookRemove.bind(this))

    document.addEventListener('animationend', (event) => {
      const target = event.target.closest('[data-book-card]')

      if (target && event.animationName === 'flicker-out') {
        target.remove()
      }
    })
  }

  handleBookRemove(event) {
    const target = event.target.closest('[data-delete-book]')

    if (target) {
      const parent = target.closest('[data-book-card]')

      parent.classList.remove('animate-swing-in')
      parent.classList.add('animate-flicker-out')
    }
  }

  onFormSubmit(event) {
    event.preventDefault()
    const formValidator = new FormValidator()

    if (formValidator.checkValidity()) {
      this.addBook({
        title: this.title.value,
        author: this.author.value,
        page: this.page.value,
        read: this.read.checked
      })

      this.form.reset()
    }
  }
}
