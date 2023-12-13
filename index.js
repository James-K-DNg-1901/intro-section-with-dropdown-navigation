const feature_btn = document.getElementById('features');
const feature_menu = document.getElementById('features-menu');
const company_btn = document.getElementById('company');
const company_menu = document.getElementById('company-menu');
const web_body = document.getElementById('body');
const menu_btn = document.getElementById('menu-icon');
const close_btn = document.getElementById('close-icon');
const menu = document.getElementById('menu');

feature_btn.addEventListener('click', function () {
  feature_menu.classList.toggle('hidden');
  company_menu.classList.add('hidden');
});
company_btn.addEventListener('click', function () {
  company_menu.classList.toggle('hidden');
  feature_menu.classList.add('hidden');
});

menu_btn.addEventListener('click', function () {
  menu.classList.remove('max-md:hidden');
  menu_btn.classList.add('hidden');
  close_btn.classList.remove('hidden');
});

close_btn.addEventListener('click', function () {
  menu.classList.add('max-md:hidden');
  menu_btn.classList.remove('hidden');
  close_btn.classList.add('hidden');
});

web_body.addEventListener('click', function () {
  company_menu.classList.add('hidden');
  feature_menu.classList.add('hidden');
  menu.classList.add('max-md:hidden');
  menu_btn.classList.remove('hidden');
  close_btn.classList.add('hidden');
});

