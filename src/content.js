import './styles/global.scss';

console.log("Hello, Webpack!");

// Skeleton for sending click events
document.addEventListener('click', function(event) {
  let target = event.target;
  while (target && target.tagName !== 'A') {
    target = target.parentElement;
  }
  if (target) {
    let href = target.href;
    console.log(href);
    chrome.runtime.sendMessage({href: href});
  }
});
