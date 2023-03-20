import Library from './Library.js'
import Header from './Header.js'

document.addEventListener('DOMContentLoaded', async () => {
  const library = new Library()
  const header = new Header()

  header.init()
  library.init()
})
