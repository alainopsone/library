const DEFAULT_INFOS = {
  title: '',
  author: '',
  page: 0,
  read: false
}

// Quand on ajoute un livre sur Library.js recuperer les infos ici
// ici on gere seulement UN livre et ses infos
// et on renvoit un objet {title, author, page, read}

export default class Book {
  constructor(infos) {
    Object.entries(infos).forEach(([key, value]) => {
      this[key] = value
    })
  }

  set title(value) {

  }

  set author(value) {

  }

  set page(value) {

  }

  set read(value) {

  }
}