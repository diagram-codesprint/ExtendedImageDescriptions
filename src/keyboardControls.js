function dragDetails(e) {
  if (this.open) {
    // TODO: Add check to ensure element doesn't go beyond right border
    if (e.key === 'ArrowRight') {
      const incX = incrementPixelVal(this.style.left);
      this.style.left = `${incX}px`;
    }
    if (e.key === 'ArrowLeft') {
      const decX = decrementPixelVal(this.style.left);
      if ((parseInt(decX) || 0) > 0) {
        this.style.left = `${decX}px`;
      }
    }

    if (e.key === 'ArrowUp') {
      const decY = decrementPixelVal(this.style.top);
      if ((parseInt(decY) || 0) > 0) {
        this.style.top = `${decY}px`;
      }
    }
    // TODO: Add check to ensure element doesn't go beyond bottom border
    if (e.key === 'ArrowDown') {
      const incY = incrementPixelVal(this.style.top);
      this.style.top = `${incY}px`;
    }
  }
}

function incrementPixelVal(position) {
  let positionValue = parseInt(position || 0, 10);
  positionValue += 5;
  return positionValue;
}

function decrementPixelVal(position) {
  positionValue = parseInt(position || 0, 10);
  positionValue -= 5;
  return positionValue;
}

document.querySelectorAll('details').forEach(details => {
  details.addEventListener('keydown', dragDetails);
});
