import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { FaCheck } from "react-icons/fa";

function Home() {
  const [inp, setInp] = useState("");
  const [tasks, setTasks] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditID] = useState(null);

  function addTask() {
    if (!inp.trim()) {
      alert("Please enter a task!");
      return;
    }

    if (!isEditing) {
      const obj = { id: Date.now(), task: inp, completed: false };
      setTasks([...tasks, obj]);
    } else {
      const updatedTasks = tasks.map((obj) => {
        return obj.id === editId ? { ...obj, task: inp } : obj;
      });
      setTasks(updatedTasks);
      setIsEditing(false);
      setEditID(null);
    }
    setInp("");
  }

  function deleteTask(id) {
    const updatedTasks = tasks.filter((obj) => obj.id !== id);
    setTasks(updatedTasks);
  }

  function editTask(id) {
    const taskToEdit = tasks.find((task) => task.id === id);
    if (taskToEdit) {
      setInp(taskToEdit.task);
      setIsEditing(true);
      setEditID(id);
    }
  }

  function markAsComplete(id) {
    const updatedTasks = tasks.map((task) => {
      return task.id === id ? { ...task, completed: !task.completed } : task;
    });
    setTasks(updatedTasks);
  }

  return (
    <>
      <div id="todo">
        <h1>TodoApp</h1>
        <input
          type="text"
          placeholder="Enter your Task"
          value={inp}
          onChange={(e) => setInp(e.target.value)}
        />
        <button onClick={addTask}>
          {!isEditing ? "ADD TASK" : "EDIT TASK"}
        </button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
              {task.task}
            </span>
            <MdDelete onClick={() => deleteTask(task.id)} />
            <MdEdit onClick={() => editTask(task.id)} />
            <FaCheck onClick={() => markAsComplete(task.id)} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default Home;
