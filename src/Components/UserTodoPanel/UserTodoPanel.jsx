import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './UserTodoPanel.css'

function UserTodoPanel() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');
  
    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };
  
    const handleAddTodo = () => {
      setTodos([...todos, inputValue]);
      setInputValue('');
    };
  return (
    <>
        <Navbar name=''/>
        <div className='cardSection'>
            <div class='addfields'>
                {/* <input type="text"  class="input" value={inputValue} onChange={handleInputChange} /> */}
                <textarea placeholder="Type, paste, cut text here..." class="input" value={inputValue}  onChange={handleInputChange}></textarea>

                <button onClick={handleAddTodo}>Add Todo</button>
            </div>

            <div  className='cardDiv'>
                {todos.map((todo, index) => (
                <p key={index} style={{padding:'1em',color:'#b0b0b0',margin:'8px'}} className='cardTodos'>{todo}</p>
                ))}
            </div>
        </div>
  </>

  );
}

export default UserTodoPanel;
