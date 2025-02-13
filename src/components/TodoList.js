import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Icon1 from './Icon1';
import { Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import TodoModal from './TodoModal';

function TodoList() {

  let [listItems, setListItems] = useState([]);
  let [showTodoModal, setShowTodoModal] = useState(false);
  let [selectedTodo, setSelectedTodo] = useState(null);

  useEffect(()=>{
      fetchTodos();
  }, []);




  async function fetchTodos(){
    const res = await fetch('http://localhost:3001/todos');
    const todos = await res.json();
    setListItems(todos);


  }

  function onCreateClick(event, todo){
    event.preventDefault();
    event.stopPropagation();

    console.log("create button is clicked", todo)
    setSelectedTodo(todo);
    setShowTodoModal(true);
  }

  function onCloseTodoModal(){
    setShowTodoModal(false);
  }

  async function onSaveTodoModal(todo){
    if(!
todo.id
){
      // create operation
      createTodo(todo);
      return;
    }
    updateTodo(todo);
   
  }

  async function createTodo(todo){
    let id = -1;
    listItems.forEach(item => {
      if(item.id >= id){
        id = item.id;
      }
    })
    todo.id = id+1;
    const res = await fetch('http://localhost:3001/todos',{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    })
    fetchTodos();
    setShowTodoModal(false);
  }

  async function updateTodo(todo){
    const res = await fetch('http://localhost:3001/todos/'+todo.id,{

      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    })
    fetchTodos();
    setShowTodoModal(false);
  }

  return (
    <Container>
      <div className='my-3 d-flex justify-content-end align-items-center'>
        <Button variant="primary" onClick={(event) => onCreateClick(event, null)}>Create</Button>
      </div>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Todo</th>
          <th style={{width:"150px"}}>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          
listItems.map((item) => {
            return (
              <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.todo}</td>
              <td>
                <Button variant="warning" onClick={(event) => onCreateClick(event, item)}>
                  <Icon1 name="edit" />
                </Button>
                <Button variant="danger">
                <Icon1 name="delete" />
                </Button>
              </td>
            </tr>
            );

          })
        }
       
      
      </tbody>
    </Table>
    {
      showTodoModal? <TodoModal close={onCloseTodoModal} save={onSaveTodoModal} todo={selectedTodo}/>:''
    }
    </Container>
  );
}

export default TodoList; 