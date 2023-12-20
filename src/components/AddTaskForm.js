import React from 'react'

function AddTaskForm({newTask, handleInputChange, handleSubmit}) {
  return (
    <div>
      <form action="#" className="form">
        <label htmlFor="newitem">Add the todo list</label>
        <input
          type="text"
          id="newitem"
          value={newTask}
          onChange={handleInputChange}
        />
        <button onClick={handleSubmit} type="submit">
          Add Item
        </button>
      </form>
    </div>
  )
}

export default AddTaskForm
