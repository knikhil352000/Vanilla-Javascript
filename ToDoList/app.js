
const btn = document.querySelector('.btn');
const items = [];
const input = document.querySelector('input[type=text]');
const checkbox = document.querySelectorAll('input[type=checkbox]');

btn.addEventListener('click', function(){
    let node = document.createElement('li');
    node.innerHTML = `<input type="checkbox"><p>${input.value}</p>`;
    document.querySelector('ul').appendChild(node);
    input.value = "";
});

const wrapper = document.querySelector('.clicker');

wrapper.addEventListener('click', (event) => {
  const isButton = event.target.nodeName === 'BUTTON';
  if (!isButton) {
    return;
  }
})

