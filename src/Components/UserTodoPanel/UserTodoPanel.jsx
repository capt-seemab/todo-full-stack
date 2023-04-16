import React, { useEffect, useState } from "react";
import "./UserTodoPanel.css";
import "../Navbar/Navbar.css";
import { useLocation, useNavigate } from "react-router-dom";
function UserTodoPanel({ email, id }) {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  const { state } = useLocation();


  useEffect(() => {
    fetch("http://localhost:3001/api/todo/getUserTodo", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: state.email,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        setTodos(result);
        setInputValue("");
      });
  }, []);

  const handleAddTodo = () => {
    fetch("http://localhost:3001/api/todo", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: state.email,
        description: inputValue,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        if (
          result &&
          result.errors &&
          result.errors[0] &&
          result.errors[0].msg
        ) {
          alert(result.errors[0].msg);
        } else {
          if (result && result.errors) {
            alert(result.errors);
          } else {
            setTodos(result);
            setInputValue("");
          }
        }
      });

    // setTodos([...todos, inputValue]);
  };

  const deleteTask=(id)=>{
    fetch("http://localhost:3001/api/todo/delete", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id:id,
        email:state.email
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        setTodos(result);
        setInputValue("");
      });
  }
 


  const logOut = () => {
    fetch("http://localhost:3001/api/logout", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: state.email,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        if (!result.isActive) {
          navigate("/");
        }
      });
  };
  return (
    <>
      <div className="navbar">
        <div className="username">{state.email}</div>
        <div className="userLog">
          <div
            className="signOut"
            onClick={logOut}
            style={{ cursor: "pointer" }}
          >
            SignOut
          </div>
        </div>
      </div>
      <div className="cardSection">
        <div class="addfields">
          <textarea
            placeholder="Type, paste, cut text here..."
            class="input"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          ></textarea>

          <button onClick={handleAddTodo}>Add Todo</button>
        </div>

        <div className="cardDiv">
          {todos?.map((todo, index) => (
            <p
              key={index}
              style={{ padding: "1em", color: "#b0b0b0", margin: "8px" }}
              className="cardTodos"
            >
              {todo.description}
              <button style={{marginLeft:"15em"}} onClick={()=>deleteTask(todo._id)}>Delete</button>
            </p> 
        
          ))}
        </div>
      </div>
    </>
  );
}

export default UserTodoPanel;
