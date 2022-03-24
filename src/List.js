import React from 'react'
import CardComponent from './CardComponent'
import './list.css'

function List({ state }) {
  //console.log(state.data[0]);
  return (
    <div className='list'> 
      {state.data?.map((item,index) => (
        <CardComponent
          
          item={item}
          key={index}
          id={item.id}
          title={item.title}
          subtitle={item.subtitle}
          author={item.author}
          published={item.published}
          description={item.description}
        />
      ))}
      
      
      
    </div>
  )
}

export default List