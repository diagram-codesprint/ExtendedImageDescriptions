export function addAltText() {
  const altTextEl = document.createElement('p');
  altTextEl.textContent = this.alt;
  altTextEl.setAttribute('aria-hidden', true);
  this.contents.insertBefore(altTextEl, this.contents.firstChild);
  return this;
}

export function addDefaultSummary() {
  const summary = document.createElement('summary');
  summary.setAttribute('title', 'More Information');
  this.details.insertBefore(summary, this.details.firstChild);
  return this;
}

export function describeSummary() {
  if (!this.img.id) {
    this.img.setAttribute('id', `detailed-img-${this.id}`);
  }
  this.summary.setAttribute('aria-describedby', this.img.id);
  return this;
}

export function createContents() {
  this.contents = this.contents || document.createElement('div');
  this.contents.classList.add('detailed-contents');
  while (this.summary.nextSibling) {
    this.contents.appendChild(this.summary.nextSibling);
  }
  this.details.appendChild(this.contents);
  return this;
}
