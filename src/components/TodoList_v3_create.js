import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Icon1 from './Icon1';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import TodoModal from './TodoModal';

function TodoList() {


  let todos = [
    {
      id:1,
      todo:"Learn React"
    },
    {
      id:2,
      todo:"Learn Angular"
    }
  ];

  let [listItems, setListItems] = useState(todos);
  let [showTodoModal, setShowTodoModal] = useState(false);

  // Operations after clicking create button
  function onCreateClick(event){
    event.preventDefault();
    event.stopPropagation();

    // To print on the console
    console.log("create button is clicked")
    setShowTodoModal(true);
  }

  function onCloseTodoModal(){
    setShowTodoModal(false);
  }

  function onSaveTodoModal(todo){
    let id = -1;
    listItems.forEach(item => {
      if(item.id >= id){
        id = item.id;
      }
    })
    
todo.id= id+1;
    let items = listItems.concat([todo]);
    setListItems(items);
    setShowTodoModal(false);
  }

  return (
    <Container>
      <div className='my-3 d-flex justify-content-end align-items-center'>
        <Button variant="primary" onClick={(event) => onCreateClick(event)}>Create</Button>
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
              <td>{
item.id
}</td>
              <td>{item.todo}</td>
              <td>
                <Button variant="warning">
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
      showTodoModal? <TodoModal close={onCloseTodoModal} save={onSaveTodoModal} />:''
    }
    </Container>
  );
}

export default TodoList; 
