import React, { useState, useEffect, useRef } from "react";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '')

  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  })

  const handleChange = e => {
    setInput(e.target.value);
  };

  const [id, setId] = useState(0);
  const giveId = () => {
    setId(id + 1)
    return id;
  }

  const handleSubmit = e => {
    e.preventDefault();
    props.onSubmit({
      id: giveId(),
      text:input
    })
    setInput("");
  }

  return (
      <form className="todo-form" onSubmit={handleSubmit}>
        {props.edit ? 
        (<>
        <input
          type="text"
          placeholder="Update your item"
          value={input}
          name="text"
          className="todo-input edit"
          onChange={handleChange}
          ref={inputRef}
        />
        <button onClick={handleSubmit} className="todo-button edit">Update</button>
        </>) :
        (<>
        <input
          type="text"
          placeholder="Write down your plans!"
          value={input}
          name="text"
          className="todo-input"
          onChange={handleChange}
          ref={inputRef}
        />
        <button onClick={handleSubmit} className="todo-button">Add todo</button>
        </>)}
      </form>
  );
}

export default TodoForm;
