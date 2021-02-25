import debounce from './helpers/debounce'

console.log('Hi, webpack!');

window.addEventListener('resize', debounce(() => {
  console.log('Bounce!');
}, 500));
