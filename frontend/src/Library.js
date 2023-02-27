import Book from './Book.js'
import { inputIsValid } from './Tools'
import { delegateEventToDocument } from './Utils'

export default class Library {
  constructor() {
    this.selectors = {
      template: '[data-book-template]',
      bookList: '[data-books-list]',
      form: '[data-form]',
      title: '[data-form-title]',
      author: '[data-form-author]',
      page: '[data-form-page]',
      read: '[data-form-read]',
      edit: '[data-book-edit]'
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

  get editButton() {
    return document.querySelector(this.selectors.edit)
  }

  init() {
    this.addListeners()
    this.fetchBooks()
    // this.edit()
  }

  edit() {
    delegateEventToDocument(this.selectors.edit, 'click', () => {
      console.log('okkk')
    })
  }

  fetchBooks = async () => {
    try {
      const response = await fetch('../src/books.json')
      const books = await response.json()

      books.map(this.addBook)
    } catch (error) {
      console.error(error)
    }
  }

  addBook = ({ title = '', author = '', page = 0, read = false } = {}) => {
    const book = new Book({ title, author, page, read })
    const templateContent = this.template.content

    templateContent.querySelector('[data-book-card]').id = book.id
    templateContent.querySelector('[data-book-title]').textContent = book.title
    templateContent.querySelector('[data-book-author]').textContent = book.author
    templateContent.querySelector('[data-book-page]').textContent = book.page
    templateContent.querySelector('[data-book-read]').textContent = book.read

    this.bookList.appendChild(templateContent.cloneNode(true))
  }

  addListeners() {
    this.form.addEventListener('submit', this.onFormSubmit)

    document.addEventListener('click', this.handleBookRemove)

    document.addEventListener('animationend', (event) => {
      const target = event.target.closest('[data-book-card]')

      if (target && event.animationName === 'flicker-out') {
        target.remove()
      }
    })
  }

  handleBookRemove = event => {
    const target = event.target.closest('[data-delete-book]')

    if (target) {
      const parent = target.closest('[data-book-card]')

      parent.classList.remove('animate-swing-in')
      parent.classList.add('animate-flicker-out')
    }
  }

  onFormSubmit = event => {
    event.preventDefault()

    // console.log(inputIsValid(this.title, { minLength: 4, maxLength: 6 }))

    if (inputIsValid(this.title)) {
      this.addBook({
        title: this.title.value,
        author: this.author.value,
        page: this.page.value,
        read: this.read.checked
      })
    }

    this.form.reset()
  }
}
