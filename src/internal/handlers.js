export function dragstart() {
  this.dragging = true;
}

export function drag(e) {
  console.log(e);
}

export function dragend() {
  this.dragging = false;
}

export function click() {
  if (!this.open) {
    this.summary.classList.toggle('EIDactive');
  }
}
