function upDate(element) {
    document.getElementById('mainBox').innerHTML = element.alt;
    document.getElementById('mainBox').style.background = "url('"+element.src+"')"
}

function unDo() {
    document.querySelector('#mainBox').style.backgroundImage = "url('')";
      document.querySelector('#mainBox').innerHTML = "Hover here again to reveal cat's name!";
}

