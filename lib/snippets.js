import { Snip } from '../components/Snip.js';

export const highlightSnips = () => {
  const snips = document.querySelectorAll('pre code');
  snips.forEach(hljs.highlightBlock);
  // TODO: Check if map works.
};

export const renderSnips = snippets => {
  // map over the SNIPS
  //    transform that snip into the HTML
  const snippetHTML = snippets.map(Snip).join('');

  // put that HTML right into #snippets
  const snippetsElem = document.getElementById('snippets');
  snippetsElem.innerHTML = snippetHTML;

  // highlight the generated code snippets
  highlightSnips();
};

export const fetchSnippets = () =>
  fetch('http://localhost:5000/api/snippets').then(res => res.json());
