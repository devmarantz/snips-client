import SNIPS from '../snippet-data.js';
import { renderSnips } from './snippets.js';

const matchStr = (str, toMatch) => {
  return str.toLowerCase().includes(toMatch.toLowerCase());
};

export const search = event => {
  event.preventDefault();
  const searchText = event.target['search-text'].value;
  // Look through SNIPS
  /*
    Title
    Description
    Language
    Code
    */
  // Filter out SNIPS by its properties
  const filteredSnips = SNIPS.filter(
    snippet =>
    matchStr(snippet.title, searchText) ||
    matchStr(snippet.description, searchText) ||
    matchStr(snippet.language, searchText) ||
    matchStr(snippet.code, searchText)
  );

  // load the snippets after filtering
  renderSnips(filteredSnips);
};

export default search;