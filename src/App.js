import "./App.css";
import AddTask from "./components/addTask/AddTask";
import TaskList from "./components/taskList/TaskList";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <AddTask />
      <TaskList />
    </div>
  );
}

export default App;
