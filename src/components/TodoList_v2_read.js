import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Icon1 from "./Icon1";
import { useState } from "react";

function TodoList() {
  const todos = [
    {
      id: 1,
      todo: "Learn React",
    },
    {
      id: 2,
      todo: "Learn Angular",
    },
  ];
  let [listItems, setListItems] = useState(todos);

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
          {
listItems.map(function (listItem) {
            return (
              <tr key={listItem.id}>
                <td>{listItem.id}</td>
                <td>{listItem.todo}</td>
                <td>
                  <button className="btn btn-warning">
                    <Icon1 name="edit" />
                  </button>
                  <Button variant="danger">
                    <Icon1 name="delete" />
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}

export default TodoList; 
