const templateTag = (strings) => {
  const template = document.createElement('template');
  template.innerHTML = strings.trim();
  return document.importNode(template.content, true);
};

const openIcon = `
<svg class="detailed-marker closed" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 512 512">
  <!-- fontawesome's info-circle icon: https://fontawesome.com/license-->
  <path fill="currentColor" d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"/>
</svg>
`;

const closeIcon = `
<svg class="detailed-marker opened" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 512 512">
  <!-- fontawesome's fa-times-circle icon: https://fontawesome.com/license-->
  <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"/>
</svg>
`;

export function addAltText() {
  const altTextEl = document.createElement('p');
  altTextEl.textContent = this.alt;
  altTextEl.setAttribute('aria-hidden', true);
  this.contents.insertBefore(altTextEl, this.contents.firstChild);
  return this;
}

export function addDefaultSummary() {
  const summary = document.createElement('summary');
  summary.appendChild(templateTag(openIcon));
  summary.appendChild(templateTag(closeIcon));
  this.details.insertBefore(summary, this.details.firstChild);
  return this;
}

export function describeSummary() {
  if (!this.img.id) {
    this.img.setAttribute('id', `detailed-img-${this.id}`);
  }
  this.summary.setAttribute('aria-describedby', this.img.id);
  const title = 'More information';
  const label = (this.hasContents) ? title : `${title} (no long description available)`;
  this.summary.setAttribute('title', title);
  this.summary.setAttribute('aria-label', label);
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
