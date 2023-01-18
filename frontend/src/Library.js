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
  const bookList = document.querySelector('.js-book-list')
  const bookTemplate = document.querySelector('.book-template')
  const templateContent = bookTemplate.content

  library.forEach(book => {
    const { title, author, page, read } = book

    templateContent.querySelector('.book-title').textContent = title
    templateContent.querySelector('.book-author').textContent = author
    templateContent.querySelector('.book-page').textContent = page
    templateContent.querySelector('.book-read').textContent = read

    bookList.append(bookTemplate.content.cloneNode(true))
  })
}

function bookTemplate({ title = '---', author = '---', page = 0, read = false } = {}) {
  const bookList = document.querySelector('.js-book-list')
  const bookTemplate = document.querySelector('.book-template')
  const templateContent = bookTemplate.content

  templateContent.querySelector('.book-title').textContent = title
  templateContent.querySelector('.book-author').textContent = author
  templateContent.querySelector('.book-page').textContent = page
  templateContent.querySelector('.book-read').textContent = read

  bookList.append(bookTemplate.content.cloneNode(true))
}

function addBookToLibrary() {
  const form = document.querySelector('.js-form')
  const title = form.querySelector('.js-form-title')
  const author = form.querySelector('.js-form-author')
  const page = form.querySelector('.js-form-page')
  const read = form.querySelector('.js-form-read')
  const submit = form.querySelector('.js-form-submit')

  submit.addEventListener('click', (e) => {
    e.preventDefault()

    bookTemplate({
      title: `${title.value ||= '---'}`,
      author: `${author.value ||= '---' }`,
      page: `${page.value ||= '---'}`,
      read: `${read.value ||= 'Not yet'}`
    })

    title.value = ''
    author.value = ''
    page.value = ''
  })
}

export { Book, addBookToLibrary }