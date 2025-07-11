import logo from './logo.svg';
import './App.css';
import TodoInput from './components/TodoInput';
import { useState } from 'react';
import Todolist from './components/Todolist';

function App() {
  const[listTodo, setListTodo] = useState([]);
  let addList = (inputText) => {
    if(inputText !=='')
      setListTodo([...listTodo,inputText]);
  }
  const deleteListItem = (key) => {
    let newListItem = [...listTodo]
    newListItem.splice(key,1)
    setListTodo([...newListItem])
  }
  return (
     <>
     <div className="main-container">
      <div className="center-container">
        <TodoInput addList={addList}/>
        <h2 className='app-heading'>TODO</h2>
        <hr/>
        {listTodo.map((listItem,i) => {
          return(
                <Todolist key={i} index={i} item={listItem} deleteListItem={deleteListItem}/>
          )   
        })}
      </div>
     </div>
     </> 
  );
}

export default App;
