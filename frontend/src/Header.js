import { toggleStateClass, lockElement } from './Utils'
export default class Header {
  constructor() {
    this.selectors = {
      menu: '[data-menu-button]',
      menuList: '[data-menu-list]'
    }

    this.states = {
      isOpened: 'is-opened',
      isClosed: 'is-closed'
    }
  }

  init() {
    if (this.menuButton) this.listenEvents()
  }

  get menuButton() { return document.querySelector(this.selectors.menu) }
  get menuList() { return document.querySelector(this.selectors.menuList) }

  listenEvents() {
    this.menuButton.addEventListener('click', this.handleMenuState)
  }

  handleMenuState = () => {
    const currentState = this.menuButton.getAttribute('data-state')

    if (currentState === this.states.isClosed) {
      this.menuButton.setAttribute('data-state', this.states.isOpened)
      toggleStateClass(this.menuList, 'hidden', false)
      lockElement('body', true)
    } else {
      this.menuButton.setAttribute('data-state', this.states.isClosed)
      toggleStateClass(this.menuList, 'hidden', true)
      lockElement('body', false)
    }
  }
}
