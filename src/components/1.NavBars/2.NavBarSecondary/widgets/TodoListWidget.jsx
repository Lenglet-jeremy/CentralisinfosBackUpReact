import React, { useState } from "react";
import "./TodoListWidget.css";

const TodoListWidget = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Task 1", isEditing: false },
    { id: 2, text: "Task 2", isEditing: false },
    { id: 3, text: "Task 3", isEditing: false },
  ]);

  const handleDoubleClick = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, isEditing: true } : task
    ));
  };

  const handleChange = (id, event) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, text: event.target.value } : task
    ));
  };

  const handleBlur = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, isEditing: false } : task
    ));
  };

  const handleKeyPress = (id, event) => {
    if (event.key === "Enter") {
      handleBlur(id);
    }
  };

  return (
    <div className="todo-list-widget">
      <ul>
        {tasks.map(task => (
          <label>
          <li key={task.id}>
            <input type="checkbox" />
            {task.isEditing ? (
              <input 
                type="text" 
                value={task.text} 
                onChange={(e) => handleChange(task.id, e)}
                onBlur={() => handleBlur(task.id)}
                onKeyPress={(e) => handleKeyPress(task.id, e)}
                autoFocus
              />
            ) : (
              <span onDoubleClick={() => handleDoubleClick(task.id)}>
                {task.text}
              </span>
            )}
          </li>
          </label>
        ))}
      </ul>
    </div>
  );
};

export default TodoListWidget;
