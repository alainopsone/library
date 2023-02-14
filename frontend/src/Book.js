const DEFAULT_INFOS = {
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
  }

  set title(value) {
    this.title.value = value
  }

  set author(value) {
    console.log(value)
  }

  set page(value) {
    console.log(value)
  }

  set read(value) {
    console.log(value)
  }
}