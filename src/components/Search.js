import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Search = () => {

  const [term, setTerm] = useState('search');
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get(`https://en.wikipedia.org/w/api.php`, {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: debouncedTerm
        }
      })
      setResults(data.query.search);
    };
    search();
  }, [debouncedTerm]);

  useEffect(() => {
      const timeoutId = setTimeout(() => {
        if (term) {
          setDebouncedTerm(term);
        }
      }, 1000);
      return () => clearTimeout(timeoutId)
    // }
  }, [term]);

  const onHandleChange = (e) => {
    setTerm(e.target.value);
  }

  // const fixSnippet = (content) => {
    // let parsed = content.replace(/<span class="searchmatch">/g, '');
    // parsed = parsed.replace(/<\/span>/g, '');
    // return parsed;
    ///<span class="searchmatch">
  // }

  const renderResults = results.map(result => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
            className="ui button">
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    )
  })

  return <div>
    <h1>Search</h1>
    <div className="ui form">
      <div className="field">
        <label>Enter Search Term</label>
        <input type='text' className="input" value={term} onChange={onHandleChange}></input>
      </div>
    </div>
    <div className="ui celled list">
      {renderResults}
    </div>
  </div>
}

export default Search
