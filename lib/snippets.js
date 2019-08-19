import { Snip } from '../components/Snip.js';


export const highlightSnips = () => {
    const snips = document.querySelectorAll('pre code');
    snips.forEach(snip => hljs.highlightBlock(snip));
}

export const renderSnips = snippets => {
  // map over the SNIPS
  //    transform that snip into the HTML
  const snippetHTML = snippets.map(snippet => Snip(snippet)).join('');

  // put that HTML right into #snippets
  const snippetsElem = document.getElementById('snippets');
  snippetsElem.innerHTML = snippetHTML;
};