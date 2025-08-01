function Marquee(selector, speed) {
  const parentSelector = document.querySelector(selector);
  const clone = parentSelector.innerHTML;
  const firstElement = parentSelector.children[0];
  let i = 0;
  console.log(firstElement);
  parentSelector.insertAdjacentHTML('beforeend', clone);
  parentSelector.insertAdjacentHTML('beforeend', clone);

  setInterval(function () {
    firstElement.style.marginLeft = `-${i}px`;
    if (i > firstElement.clientWidth) {
      i = 0;
    }
    i = i + speed;
  }, 0);
}

//after window is completed load
//1 class selector for marquee
//2 marquee speed 0.2
window.addEventListener('load', () => {
  Marquee('.marquee', 0.2)
  decryptEffect('.text1', 'Explore my world through this gallery', 50);
  decryptEffect('.text2', 'All this images are designed by me, I mainly make album cover art.', 40);
  decryptEffect('.text4', 'If you are interest of getting one, you can DM me on discord : sonixbeats', 30);
  decryptEffect('.text3', '(Hover an image to color it and hold pressed left click to size up)', 25);
});

//==========================================================


function decryptEffect(selector, text, speed) {
  const element = document.querySelector(selector);
  let decryptedText = '';
  let i = 0;

  const interval = setInterval(() => {
    decryptedText += text[i];
    element.textContent = decryptedText;
    i++;

    if (i >= text.length) {
      clearInterval(interval);
    }
  }, speed);
}

