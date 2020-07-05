import React, {useState} from 'react'

const Accordian = ({ items }) => {

  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(index);
  }

  const renderedItems = items.map((item, index) => {
    const active = activeIndex === index ? 'active' : '';

    return <React.Fragment key={item.title}>
      <div className={`title ${active}`} onClick={() => onTitleClick(index)}>
        <icon className='dropdown icon'></icon>
        {item.title}
      </div>
      <div className={`content ${active}`}>
        <p>{item.content}</p>
      </div>
    </React.Fragment>
  })

  return <div className='ui styled accordion'>
    {renderedItems}
    {/* <h1>{activeIndex}</h1> */}
    </div>
};

export default Accordian;