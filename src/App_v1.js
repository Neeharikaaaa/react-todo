// making browser standard uniform->normalize.css
import 'bootstrap/dist/css/bootstrap.min.css'; // 3rd party
import './App.css'; // my styles
import Button from 'react-bootstrap/Button';
function App() {
  return (
   <div>
    <p> HOLAA AMIGOS</p>
    <button className='clickMeButton'>Click me !</button> 
    <Button variant ='danger'>React BS Button</Button>
    <button className='btn btn-primary'>BS Button</button>
  </div>
  );
}

export default App;
