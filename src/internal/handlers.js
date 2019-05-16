export function dragstart(e) {
  this.details.classList.add('detailed-dragging');
  const { screenY, screenX } = ('touches' in e) ? e.touches[0] : e;
  this.prevPos = { screenY, screenX };
}

export function drag(e) {
  if (this.dragging) {
    const { screenY, screenX } = ('touches' in e) ? e.touches[0] : e;
    this.pos = {
      top: this.pos.top + (screenY - this.prevPos.screenY),
      left: this.pos.left + (screenX - this.prevPos.screenX),
    };
    this.prevPos = { screenY, screenX };
  }
}

export function dragend() {
  this.details.classList.remove('detailed-dragging');
}

export function click() {
  if (!this.open) {
    this.summary.classList.toggle('detailed-active');
  }
}

export function closeend() {
  this.pos = {
    top: 0,
    left: 0,
  };
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
