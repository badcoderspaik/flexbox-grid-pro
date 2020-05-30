document.addEventListener('DOMContentLoaded', function () {
  const burger = document.querySelector('.burger');
  const sidebar = document.querySelector('.sidebar-wrapper');

  burger.addEventListener('click', function () {
    sidebar.classList.toggle('sidebar-wrapper_opened');
    sidebar.classList.add('sidebar-wrapper_animated');
  }, false);
});