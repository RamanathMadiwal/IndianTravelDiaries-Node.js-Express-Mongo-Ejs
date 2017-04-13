let counter = 0;

function changeBG() {
  let imgs = [
        'url(../imgs/0.jpg)',
        'url(../imgs/1.jpg)',
        'url(../imgs/2.jpg)',
        'url(../imgs/3.jpg)',
        'url(../imgs/4.jpg)',
        'url(../imgs/5.jpg)',
        'url(../imgs/6.jpg)',
        'url(../imgs/7.jpg)'
      ];

  if (counter === imgs.length) {
    counter = 0;
  }
  document.body.style.backgroundImage = imgs[counter];

  counter++;
}

setInterval(changeBG, 7000);
