'use strict';
// All research content and downloads remain available without JavaScript.
const printButton = document.getElementById('print-cv');
if (printButton) {
  printButton.hidden = false;
  printButton.addEventListener('click', () => window.print());
}
