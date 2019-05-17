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

export function toggle() {
  if (!this.open) {
    this.resetPosition();
  }
}

const stepBase = 5;

export function keydown(e) {
  if (this.open) {
    const mod = (e.altKey) ? 10 : 1;
    const step = stepBase * mod;
    // TODO: Add check to ensure element doesn't go beyond right border
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      const change = parseInt(this.details.style.left || 0, 10) + step;
      this.details.style.left = `${change}px`;
    }

    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      const change = parseInt(this.details.style.left || 0, 10) - step;
      this.details.style.left = `${change}px`;
    }

    if (e.key === 'ArrowUp') {
      e.preventDefault();
      const change = parseInt(this.details.style.top || 0, 10) - step;
      this.details.style.top = `${change}px`;
    }

    // TODO: Add check to ensure element doesn't go beyond bottom border
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const change = parseInt(this.details.style.top || 0, 10) + step;
      this.details.style.top = `${change}px`;
    }
  }
}
