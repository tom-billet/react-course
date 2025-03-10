
function App() { 



  return (
    <>
      <h1>ToDo List</h1>
      <div id="">
        <form>
          <input type="text" placeholder="ToDo..." id="task-input"></input>
          <button id="task-add-btn">Add task</button>
        </form>
        <select id="task-filter-choice">
          <option>All tasks</option>
          <option>Unfinished</option>
          <option>Finished</option>
        </select>
      </div>

      <div>
        <ul id="task list">

          <li className="task">
            <input type="checkbox" className="task-check"></input>
            <input type="text" className="task-text" value="example of task"></input>
          </li>

          <li className="task">
            <input type="checkbox" className="task-check"></input>
            <input type="text" className="task-text" value="example of task"></input>
          </li>

        </ul>
      </div>
      
    </>

    )
  }
export default App