export default class Form {
  constructor() {
    this.selectors = {
      form: '[data-form]',
      errors: '[data-form-error]',
      inputs: 'input',
      title: '[data-form-title]',
      author: '[data-form-author]',
      page: '[data-form-page]',
      read: '[data-form-read]'
    }
  }

  get form() {
    return document.querySelector(this.selectors.form)
  }

  get inputs() {
    return this.form.querySelectorAll(this.selectors.inputs)
  }

  get errors() {
    return this.form.querySelectorAll(this.selectors.errors)
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
}
