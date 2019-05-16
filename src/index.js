import DetailsTransition from './internal/transitionHandler';
import {
  dragstart,
  drag,
  dragend,
  click,
  keydown,
} from './internal/handlers';
import {
  addDefaultSummary,
  describeSummary,
  addAltText,
  createContents,
} from './internal/populateDetails';

const Defaults = {
  selector: 'figure>details',
  noalt: false,
};

const instances = new Set();

export default class Detailed {
  constructor(details, options = {}) {
    this.details = details;
    this.options = { ...Detailed.Defaults, ...options };
    this.enabled = false;

    this.transitionHandler = new DetailsTransition(this.details);
    this.dragstartHandler = dragstart.bind(this);
    this.dragendHandler = dragend.bind(this);
    this.dragHandler = drag.bind(this);
    this.clickHandler = click.bind(this);
    this.keydownHandler = keydown.bind(this);

    instances.add(this);
  }

  // INSTANCE METHODS

  enable() {
    if (!this.img) {
      console.warn(
        'No related image found.\n'
        + 'Associate an <img> with your <details> via aria-details.',
        this.details,
      );
      return this;
    }

    if (!this.enabled) {
      if (!this.summary) {
        addDefaultSummary.call(this);
      }
      describeSummary.call(this);

      createContents.call(this);

      if (this.copyAlt) {
        addAltText.call(this);
      }

      this.transitionHandler.enable().bindTo('.details-marker');
      this.details.addEventListener('dragstart', this.dragstartHandler);
      this.details.addEventListener('dragend', this.dragendHandler);
      this.details.addEventListener('drag', this.dragHandler);
      this.summary.addEventListener('keydown', this.keydownHandler);
      this.img.addEventListener('click', this.clickHandler);
      this.enabled = true;
    }
    return this;
  }

  disable() {
    if (this.enabled) {
      this.transitionHandler.disable();
      this.enabled = false;
    }
    return this;
  }

  destroy() {
    if (this.enabled) this.disable();
    this.transitionHandler.destroy();
    instances.delete(this);
    return this;
  }

  // PROPERTIES

  get copyAlt() {
    return !(this.details.getAttribute('data-noalt') !== null || this.options.noalt);
  }

  get open() {
    return this.details.open;
  }

  get isValid() {
    return Boolean(this.img);
  }

  get id() {
    return this.details.id;
  }

  get img() {
    return document.querySelector(`img[aria-details="${this.id}"]`);
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

  static get Defaults() {
    return Defaults;
  }

  static enhance(detailsElement, options = {}) {
    const d = new Detailed(detailsElement, options);
    d.enable();
    return d;
  }

  static enhanceAll(selector, options = {}) {
    let sel;
    let opts;
    if (typeof selector === 'string') {
      sel = selector;
      opts = options;
    } else {
      sel = Detailed.Defaults.selector;
      opts = selector;
    }
    document.querySelectorAll(sel).forEach((el) => {
      Detailed.enhance(el, opts);
    });
    return Detailed.instances;
  }
}
