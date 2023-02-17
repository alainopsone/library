export default class Form {
  constructor() {
    this.selectors = {
      form: '[data-form]',
      errors: '[data-form-error]',
      inputs: 'input'
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
}
