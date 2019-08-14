const snippets = document.getElementById('snippets');


// setTimeout(()=>{
//   snippets.style.backgroundColor = 'red';
// }, 2000);


// setTimeout(()=>{
//   snippets.innerHTML = '<h2>WELCOME YO!<h2>';
// }, 4000);


// const h2 = snippets.querySelector('h2');
// h2.style.fontSize = '100px';

// const h2s = snippets.querySelectorAll('h2');  //array of h2
// h2s.forEach(h2 => (h2.style.fontSize = '27px'))

setInterval(()=>{
  // create a new element
  const button = document.createElement('button');
  // set its text
  button.innerText='Answer survey';
  // add it to the body
  document.body.append(button)
}, 2000);

function survey() {
  prompt('How are you enjoying your time?');
  // sends to server
}

function aggresiveButton(button) {
  button.innerHTML = `${button.innerHTML.toUpperCase()}PLEASE! `;
}     