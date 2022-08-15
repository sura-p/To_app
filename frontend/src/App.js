import logo from './logo.svg';
import './App.css';
import ToDo from './Components/ToDo';
import DisplayTodos from './Components/DisplayTodos';
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <ToDo/>
       <DisplayTodos/>
      </header>
    </div>
  );
}

export default App;
