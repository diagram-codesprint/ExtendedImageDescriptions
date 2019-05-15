const Defaults = {};

const instances = new Set();

export default class Detailed {
  constructor(details, options = {}) {
    this.details = details;
    this.options = { ...Defaults, ...options };
    this.enabled = false;

    instances.add(this);
  }

  // INSTANCE METHODS

  enable() {
    if (!this.enabled) {
      // enable affordances
      this.enabled = true;
    }
    return this;
  }

  disable() {
    if (this.enabled) {
      // disable affordances
      this.enabled = false;
    }
    return this;
  }

  destroy() {
    if (this.enabled) this.disable();
    instances.delete(this);
    return this;
  }

  // PROPERTIES

  get id() {
    return this.details.id;
  }

  get img() {
    return document.querySelector(`img[aria-details=${this.id}]`);
  }

  get alt() {
    return this.img.getAttribute('alt');
  }

  get summary() {
    return this.details.querySelector('summary');
  }

  // STATIC METHODS (PRIMARY API)

  static get instances() {
    return instances;
  }

  static enhance(detailsElement, options = {}) {
    const d = new Detailed(detailsElement, options);
    d.enable();
    return d;
  }

  static enhanceAll(selector = 'details', options = {}) {
    document.querySelectorAll(selector).forEach((el) => {
      Detailed.enhance(el, options);
    });
    return Detailed.instances;
  }
}
