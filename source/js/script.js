document.addEventListener('DOMContentLoaded', function () {
  var button = document.querySelector(".button");
  var dropdownList = document.querySelector(".dropdown-list");
  var chevronDown = document.querySelector(".fa-chevron-down");

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
 
  function closeMenu(event) {
    var isClickOutsideDropdown = !event.target.closest(".dropdown-menu");

    if (isClickOutsideDropdown && !isNoneDisplayDropdown()) {

      dropdownList.style.display = 'none';
      chevronDown.classList.toggle("active");
    }
  }
});


