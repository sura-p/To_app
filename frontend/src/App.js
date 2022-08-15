import logo from './logo.svg';
import './css/main.css';
import ToDo from './Components/ToDo';
import DisplayTodos from './Components/DisplayTodos';
import { Route, Routes } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container } from 'react-bootstrap';
import SignupScreen from './Components/SignupScreen';
import SigninScreen from './Components/SigninScreen';
function App() {
  return (
<>
    <Container className="mt-3">
    <ToastContainer position="bottom-center" limit={1} />
        <Routes>
          <Route path='/signin' element={<SignupScreen/>}/>
         
          <Route path='/' element={<SigninScreen/>}/>
          <Route path='/todo' element={<ToDo/>}/>
         
        </Routes>
        </Container>
    {/* <div className="App">
      <h1>Todo App</h1>
     
       <ToDo/>
       <DisplayTodos/>
      
    </div> */}
    </>
  );
}

export default App;
