import React from 'react';
// import Accordian from './components/Accordion'
import Search from './components/Search'

const items = [
  {
    title: "What is React?",
    content: "A js based development framework."
  },
  {
    title: "Why use react?",
    content: "Makes development simpler."
  }
  ,
  {
    title: "Who uses react?",
    content: "Front end developers."
  }
]

export default () => {
  return (
    <div>
      {/* <Accordian items={items}/> */}
      <Search />
    </div>
  )
}