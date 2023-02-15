export default class Form {
  constructor() {
    this.selectors = {
      form: '[data-form]',
      inputs: 'input',
    }
  }

  get form() {
    return document.querySelector(this.selectors.form)
  }

  get inputs() {
    return this.form.querySelectorAll(this.selectors.inputs)
  }
}