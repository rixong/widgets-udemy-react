import React, { useState, useEffect } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const Translate = () => {

  const options = [
    {
      label: 'Afrikaans',
      value: 'af'
    },
    {
      label: 'Arabic',
      value: 'ar'
    },
    {
      label: 'Hindi',
      value: 'hi'
    },
    {
      label: 'Myanmar',
      value: 'my'
    }
  ]

  const [language, setLanguage] = useState(options[0])
  const [text, setText] = useState('hello world')

  useEffect(() => {

  }, [])

  return (
    <div>

      <div className="ui form">
        <div className="field">
          <div className="label">Enter text</div>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)}></input>
        </div>
      </div>

      <Dropdown
        label="Select a language"
        options={options}
        selected={language}
        onSelectedChange={setLanguage}
      />
      <hr></hr>
      <h3 className="header">Output</h3>
      <Convert
        language={language}
        text={text}
      />
    </div>
  )
}

export default Translate