import SNIPS from './snippet-data.js';
import { renderSnips, highlightSnips } from './lib/snippets.js';
import search from './lib/search.js';

renderSnips(SNIPS);

const searchForm = document.getElementById('search-bar');
const searchText = document.getElementById('search-text');

searchForm.addEventListener('submit', event => {
  event.preventDefault();
  search(searchText.value);
});

// hljs.initHighlightingOnLoad();
highlightSnips();