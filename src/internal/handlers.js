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
    this.summary.classList.toggle('detailed-active');
  }
}

function incrementPixelVal(position) {
  let positionValue = parseInt(position || 0, 10);
  positionValue += 5;
  return positionValue;
}

function decrementPixelVal(position) {
  let positionValue = parseInt(position || 0, 10);
  positionValue -= 5;
  return positionValue;
}

export function keydown(e) {
  if (this.open) {
    // TODO: Add check to ensure element doesn't go beyond right border
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      const incX = incrementPixelVal(this.details.style.left);
      this.details.style.left = `${incX}px`;
    }

    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      const decX = decrementPixelVal(this.details.style.left);
      if ((parseInt(decX, 10) || 0) > -1) {
        this.details.style.left = `${decX}px`;
      }
    }

    if (e.key === 'ArrowUp') {
      e.preventDefault();
      const decY = decrementPixelVal(this.details.style.top);
      if ((parseInt(decY, 10) || 0) > -1) {
        this.details.style.top = `${decY}px`;
      }
    }

    // TODO: Add check to ensure element doesn't go beyond bottom border
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const incY = incrementPixelVal(this.details.style.top);
      this.details.style.top = `${incY}px`;
    }
  }
}
