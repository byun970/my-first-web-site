const Body = {
  setBackgroundColor: (color) => {
    // const body = document.querySelector('body');
    // body.style.backgroundColor = color;
    $('body').css('background-color', color);
  },
  setColor: (color) => {
    // const body = document.querySelector('body');
    // body.style.color = color;
    $('body').css('color', color);
  }
}

const Alist = {
  setColor: (color) => {
    // const aList = document.querySelectorAll('a');
    // for (let i = 0; i < aList.length; i++) {
    //   aList[i].style.color = color;
    // }
    $('a').css('color', color);
  }
}

const nightDayToggle = (self) => {

  if (self.innerHTML === 'Night') {
    self.innerHTML = 'Day';
    Body.setBackgroundColor('black');
    Body.setColor('white');
    Alist.setColor('powderblue');
  } else {
    self.innerHTML = 'Night';
    Body.setBackgroundColor('white');
    Body.setColor('black');
    Alist.setColor('black');
  }
}