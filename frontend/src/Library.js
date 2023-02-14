import FormValidator from "./Form-validator"
export default class Library {
  constructor() {
    this.selectors = {
      template: '[data-book-template]',
      bookList: '[data-books-list]',
      form: '[data-form]',
      title: '[data-form-title]',
      author: '[data-form-author]',
      page: '[data-form-page]',
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
    const templateContent = this.template.content

    templateContent.querySelector('[data-book-title]').textContent = `Title: ${title || '...'}`
    templateContent.querySelector('[data-book-author]').textContent = `Author: ${author || '...' }`
    templateContent.querySelector('[data-book-page]').textContent = `Pages: ${page || '...'}`
    templateContent.querySelector('[data-book-read]').textContent = `Read ? ${read ? 'Yes' : 'Not yet'}`

    this.bookList.appendChild(templateContent.cloneNode(true))
  }

  addListeners() {
    this.form.addEventListener('submit', this.onFormSubmit.bind(this))

    document.addEventListener('click', this.handleBookRemove.bind(this))

    document.addEventListener('animationend', (event) => {
      const target = event.target.closest('[data-book-card]')

      console.log(target)
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
        read: this.read
      })

      this.form.reset()
    }
  }
}