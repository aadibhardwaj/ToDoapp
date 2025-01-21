import { useState } from "react";
function App() {
  const [inp , setInp] = useState("");
  const [tasks , setTasks] = useState([]);


  // function changeInp(e){
  //   setInp(e.target.value);
  // }

  function addTask(){
    // tasks.push(inp);
    const obj ={id: Date.now(), task: inp};
    setTasks([...tasks,obj]);
    setInp("")
  }

  function deleteTask(e,id){
    // tasks.find((obj) => {return obj.id === id})
    const taskToDelete =tasks.find((obj) => {
      return obj.id === id;
    })
    console.log(taskToDelete);
  }
  // console.log(tasks);

  return (
    <>
    <div id="todo">
      <h1>TodoApp</h1>
      <input
      type="text"
      placeholder="Enter ur Task"
      value={inp}
      onchange={(e)=> setinp(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>
    </div>
    <ul>
      {
        tasks.map((task , index) => {
          return <li>key={task}</li>
        })
      }
    </ul>

    </>
  )
}

export default App