import Library from './Library.js'
import Header from './Header'

document.addEventListener('DOMContentLoaded', () => {
  const library = new Library()
  const header = new Header()

  header.init()
  library.init()
})
