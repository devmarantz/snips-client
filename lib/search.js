import SNIPS from '../snippet-data.js';
import { renderSnips } from './snippets.js';

const search = text => {
    /* look through SNIPS
        {
            title:
            description:
            language:
            code:
        }
     */
    // filter out the snips by said properties
    const filteredSnips = SNIPS.filter(snippet => snippet.title.includes(text));
    // load the snippets after filtering
    renderSnips(filteredSnips);
  };
  
  export default search;