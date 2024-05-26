document.addEventListener('DOMContentLoaded', function() {
  onInit();
});

function onInit() {
  let navDefault = 'nav-1'
  setNav(navDefault);
}

function onShowContent(id) {
  if (!id) {
    return `Id error: ${id}`
  }
  setNav(id);
}

function setNav(id) {
  var buttonChips = document.getElementsByClassName('button-chips');
  var numContent = buttonChips[0].childElementCount;

  for (var i = 1; i < numContent+1; i++) {
    let idNav = `nav-${i}`;
    let contentIdNav = `nav-on-${i}`;

    let navDisplayContent = document.getElementById(idNav);
    let navClassList = document.getElementById(contentIdNav);

    if(id == idNav) {
      navDisplayContent.style.display = 'block'
      navClassList.classList.add('simulated-active');
    } else {
      navDisplayContent.style.display = 'none'
      navClassList.classList.remove('simulated-active');
    }
  }
}