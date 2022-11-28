const form = document.getElementsByClassName('button-toggle__form')[0];
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (document.getElementsByClassName('button__popover')[0]) {
      const popover = document.getElementsByClassName('button__popover')[0];
      popover.classList.toggle('button__popover_disabled');
    } else {
      const popover = document.createElement('div');
      popover.className = 'button__popover';

      const popoverHeader = document.createElement('div');
      popoverHeader.textContent = 'Popover!';
      popoverHeader.style.backgroundColor = 'rgb(230, 230, 230)';
      popoverHeader.style.borderRadius = '5px 5px 0 0';
      popoverHeader.style.borderBottom = '1px solid rgb(80, 80, 80)';

      const popoverContent = document.createElement('div');
      popoverContent.textContent = 'Press the button again and I will disappear!';

      popover.appendChild(popoverHeader);
      popover.appendChild(popoverContent);

      const button = document.getElementsByClassName('button-toggle__button')[0];
      button.offsetParent.appendChild(popover);
      popover.style.top = `${button.offsetTop - popover.offsetHeight - 10}px`;
      popover.style.left = `${button.offsetLeft + button.offsetWidth / 2 - popover.offsetWidth / 2}px`;
    }
  });
}
