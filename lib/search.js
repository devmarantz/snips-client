import SNIPS from '../snippet-data.js';
import { renderSnips, fetchSnippets } from './snippets.js';

const matchStr = (str, toMatch) => {
  return str.toLowerCase().includes(toMatch.toLowerCase());
};

export const search = async event => {
  event.preventDefault();
  const searchText = event.target['search-text'].value;
  // Look through SNIPS
  /*
    Title
    Description
    Language
    Code
  */

  // TODO: Make an API call
  const snips = await fetchSnippets();

  // TODO: Get API data

  // TODO: 



  // Filter out SNIPS by its properties
  const filteredSnips = snips.filter(
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