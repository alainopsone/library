export default class Header {
  constructor() {
    this.selectors = {
      menu: '[data-menu-button]'
    }
  }

  init() {
    if (this.menuButton) this.listenEvents()
  }

  get menuButton() { return document.querySelector(this.selectors.menu) }

  listenEvents() {
    this.menuButton.addEventListener('click', () => {
      this.menuButton.classList.contains('is-opened') ? this.close() : this.open()
    })
  }

  open = () => {
    this.menuButton.classList.add('is-opened')
  }

  close = () => {
    this.menuButton.classList.remove('is-opened')
  }
}
