import SNIPS from './snippet-data.js';

const renderSnips = snippets => {
  // map over the SNIPS transform that into the HTML
  const snippetHTML = snippets
    .map(
      snippet => /*html*/ `
  <div class='snip'>
    <div class='text'>
      <h2>${snippet.title}</h2>
      <p>${snippet.description}</p>
      <pre><code>${snippet.code}</code></pre>
    </div>
  </div>`
    )
    .join('');

  // put that HTML into #snippets
  const snippetsElem = document.getElementById('snippets');
  snippetsElem.innerHTML = snippetHTML;
  console.log(snippetsElem);
};

renderSnips(SNIPS);
