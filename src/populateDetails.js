import Detailed from './index';

export function createAltText() {
  const altTextEl = document.createElement('p');
  altTextEl.textContent = this.alt;
  return altTextEl;
}

export function addDefaultSummary() {
  if (this.summary === null) {
    const summary = createElement('summary');
    summary.setAttribute('title', 'More Information');
    this.details.insertBefore(summary, this.child.firstChild);
  }
}

export function assignSummaryId() {
  const summaryId = `detailed-${this.id}`;
  this.summary.id = summaryId;
}

export function describeImage() {
  this.image.setAttribute('aria-describedby', this.summary.id);
}
