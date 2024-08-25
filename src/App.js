// making browser standard uniform->normalize.css
import 'bootstrap/dist/css/bootstrap.min.css'; // 3rd party
import './App.css'; // my styles
import './components/PrimaryNavbar.css';
import TodoList from './components/TodoList';
import PrimaryNavbar from './components/PrimaryNavbar';
function App() {
  return (
   <div>
    <PrimaryNavbar />
    <TodoList />
  </div>
  );
}

export default App;
