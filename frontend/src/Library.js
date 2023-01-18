let library = [
  {
    title: 'title 1',
    author: 'author name 1',
    page: 2332,
    read: false
  },
  {
    title: 'title 2',
    author: 'author name 2',
    page: 133,
    read: true
  },
  {
    title: 'title 3',
    author: 'author name 3',
    page: 293,
    read: false
  },
]

function Book() {
  // TUTO: https://www.digitalocean.com/community/tutorials/how-to-use-the-javascript-fetch-api-to-get-data

  // fetch('../books.json')
  //   .then(res => res.json())
  //   .then(data => {
  //     let books = data
  //     console.log(data)

  //     books.map(book => {
  //       const { title, author, page, read } = book
  //       bookTemplate({ title, author, page, read })
  //     })
  //   })
  //   .catch(err => console.log(err))

  library.forEach(book => {
    const { title, author, page, read } = book

    bookTemplate({ title, author, page, read })
  })
}

function bookTemplate({ title = '---', author = '---', page = 0, read = false } = {}) {
  const bookList = document.querySelector('[data-books-list]')
  const template = document.querySelector('[data-book-template]')
  const templateContent = template.content

  templateContent.querySelector('.book-title').textContent = title
  templateContent.querySelector('.book-author').textContent = author
  templateContent.querySelector('.book-page').textContent = page
  templateContent.querySelector('.book-read').textContent = read

  bookList.append(templateContent.cloneNode(true))
}

function removeBook() {
  const deleteButton = document.querySelectorAll('[data-delete-book]')

  if (deleteButton) {
    deleteButton.forEach(btn => {
      btn.addEventListener('click', (e) => {
        if (e.target === btn ) {
          const parent = btn.parentElement.parentElement

          parent.classList.add('animate-flicker-out')

          parent.addEventListener('animationend', () => {
            parent.remove()
          })
        }
      })
    })
  }
}

function addBook() {
  const form = document.querySelector('[data-form]')
  const title = form.querySelector('.js-form-title')
  const author = form.querySelector('.js-form-author')
  const page = form.querySelector('.js-form-page')
  const read = form.querySelector('.js-form-read')
  const submit = form.querySelector('[data-form-submit]')

  submit.addEventListener('click', (e) => {
    e.preventDefault()

    bookTemplate({
      title: `${title.value ||= '...'}`,
      author: `${author.value ||= '...' }`,
      page: `${page.value ||= '...'}`,
      read: `${read.value ||= 'Not yet'}`
    })

    title.value = ''
    author.value = ''
    page.value = ''
  })
}

export { Book, addBook, removeBook }