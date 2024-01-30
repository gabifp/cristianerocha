document.addEventListener('DOMContentLoaded', function () {
  var button = document.querySelector(".button");
  var dropdownList = document.querySelector(".dropdown-list");
  var chevronDown = document.querySelector(".fa-chevron-down");

  console.log('Dropdown display none: ', isNoneDisplayDropdown())
  console.log('Dropdown List - document.querySelector: ', dropdownList)

  button.addEventListener('click', function (e) {
      e.preventDefault();
      toggleDropdown();
  });

  document.addEventListener('click', closeMenu);

  function isNoneDisplayDropdown() {
    return dropdownList.style.display === 'none' || dropdownList.style.display === '';
  }

  function toggleDropdown() {
    dropdownList.style.display = isNoneDisplayDropdown() ? 'block' : 'none';
    chevronDown.classList.toggle("active");
  }
 

  // Função para fechar o dropdown se o clique ocorrer fora dele
  function closeMenu(event) {
    var isClickOutsideDropdown = !event.target.closest(".dropdown-menu");

    console.log('Clicado para fora do dropdown: ', isClickOutsideDropdown)
    console.log('Evento recebido como parâmetro para a função closeMenu', event)
    console.log('Dropdown display: ', dropdownList.style.display)
    if (isClickOutsideDropdown && !isNoneDisplayDropdown()) {

      dropdownList.style.display = 'none';
      chevronDown.classList.toggle("active");
    }
  }
});
