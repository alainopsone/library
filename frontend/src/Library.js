import { books } from './books.js'

function Library() {
  fecthBooks()
}

const fecthBooks = async () => {
  // try {
  //   const response = await fetch('../src/books.json')
  //   const books = await response.json()

  //   books.map(book => {
  //     const { title, author, page, read } = book

  //     bookTemplate({ title, author, page, read })
  //   })
  // } catch (error) {
  //   console.error(error)
  // }

  // TODO: delete fake data (will change to async await func (see func above))
  if (books) {
    books.map(book => {
      const { title, author, page, read } = book

      bookTemplate({ title, author, page, read })
    })
  }
}

function bookTemplate({ title = '---', author = '---', page = 0, read = false } = {}) {
  const bookList = document.querySelector('[data-books-list]')
  const template = document.querySelector('[data-book-template]')
  const templateContent = template.content

  templateContent.querySelector('[data-book-title]').textContent = title
  templateContent.querySelector('[data-book-author]').textContent = author
  templateContent.querySelector('[data-book-page]').textContent = page
  templateContent.querySelector('[data-book-read]').textContent = read

  bookList.append(templateContent.cloneNode(true))
}

function removeBook() {
  document.addEventListener('click', (e) => {
    const target = e.target.closest('[data-delete-book]')

    if (target) {
      const parent = target.parentElement.parentElement

      parent.classList.add('animate-flicker-out')

      parent.addEventListener('animationend', () => {
        parent.remove()
      })
    }
  })
}

// TODO: create default form validation...
function formValidation() {
  const form = document.querySelector('[data-form]')
  const title = form.querySelector('[data-form-title]')
  const author = form.querySelector('[data-form-author]')
  const page = form.querySelector('[data-form-page]')
  const read = form.querySelector('[data-form-read]')
  const errorMsg = document.querySelector('[data-form-error]')

  title.addEventListener('input', () => {
    if (title.validity.valid) {
      errorMsg.textContent = 'ok c\'est bon'
      title.classList.remove('bg-invalid-input', 'border-red-600')
      title.classList.add('bg-valid-input', 'border-green-600')
    } else if (title.value === '') {
      showError()
      title.classList.remove('bg-valid-input', 'border-green-600')
    }
  })

  form.addEventListener('submit', (e) => {
    e.preventDefault()

    if (!title.validity.valid || title.valueMissing) {
      title.classList.add('bg-invalid-input', 'border-red-600')
      showError()
    } else {
      bookTemplate({
        title: `${title.value ||= '...'}`,
        author: `${author.value ||= '...' }`,
        page: `${page.value ||= '...'}`,
        read: `${read.value ||= 'Not yet'}`
      })

      title.value = ''
      author.value = ''
      page.value = ''
      errorMsg.textContent = ''
      title.classList.remove('bg-valid-input', 'border-green-600')
    }
  })

  function showError() {
    if (title.validity.valueMissing) {
      errorMsg.textContent = 'You need to enter a title.'
      title.classList.add('bg-invalid-input', 'border-red-600')
    } else if (title.validity.typeMismatch) {
      errorMsg.textContent = 'Enter a real title bitch'
      title.classList.add('bg-invalid-input', 'border-red-600')
    }
  }
}

function addBook() {
  const form = document.querySelector('[data-form]')
  const title = form.querySelector('[data-form-title]')
  const author = form.querySelector('[data-form-author]')
  const page = form.querySelector('[data-form-page]')
  const read = form.querySelector('[data-form-read]')

  form.addEventListener('submit', (e) => {
    e.preventDefault()

    bookTemplate({
      title: `Title: ${title.value ||= '...'}`,
      author: `Author: ${author.value ||= '...' }`,
      page: `Pages: ${page.value ||= '...'}`,
      read: `Read ? ${read.checked ? 'Yes' : 'Not yet'}`
    })

    title.value = ''
    author.value = ''
    page.value = ''
  })
}

export { Library, addBook, removeBook }