import React from 'react'

function Todolist(props) {
  return (
    <div>
      <li className="list-item">
        {props.item}
        <span className='icons' onClick={e=>{
            props.deleteListItem(props.index)
        }}>
            &times;
        </span>
      </li>
    </div>
  )
}

export default Todolist
