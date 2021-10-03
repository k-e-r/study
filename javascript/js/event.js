// function clicked() {
//   console.log('occur event');
// }

// var e = document.getElementById('button');
// e.onclick = function() {
//   console.log('occur event');
// };

// window.onload = function() {
//   console.log('occur load event');
// };

// window.onclick = function() {
//   var e = document.getElementById('button');
//   e.addEventListener('click', function() {
//     console.log('occur event');
//   }, false);
// }

document.addEventListener('DOMContentLoaded', function() {
  var e = document.getElementById('button');
  e.addEventListener('click', function() {
    appendElement();
  }, false);
}, false);

function appendElement() {
  var result = document.getElementById('result');
  var li = document.createElement('li');
  var text = document.createTextNode(result.value);
  li.appendChild(text);
  var lists = document.getElementById('lists');
  lists.appendChild(li);
}