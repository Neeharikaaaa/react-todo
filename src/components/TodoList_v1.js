import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Icon1 from './Icon1';
import Container from 'react-bootstrap/Container';
function TodoList() {
  return (
    <Container>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Todo</th>
          <th style={{width:"150px"}}>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Learn React JS</td>
          <td><Button variant ='warning'>Edit</Button>
          <Button variant ='danger'><Icon1 name="delete" /></Button></td>
        </tr>
        <tr>
          <td>1</td>
          <td>Sleep</td>
          <td><Button variant ='warning'>Edit</Button>
          <Button variant ='danger'>Delete</Button></td>
        </tr>
      </tbody>
    </Table>
    </Container>
  );
}

export default TodoList;
