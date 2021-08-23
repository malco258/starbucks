const searchEl = document.querySelector('.search');
const searchIinputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
  searchIinputEl.focus();
});

searchIinputEl.addEventListener('focus', function() {
  searchEl.classList.add('focused');
  searchIinputEl.setAttribute('placeholder', '통합검색');
});

searchIinputEl.addEventListener('blur', function() {
  searchEl.classList.remove('focused');
  searchIinputEl.setAttribute('placeholder', '');
});