import 'bootstrap/dist/css/bootstrap.min.css';
import {ListGroup} from 'react-bootstrap';  

function List({data}) {

  return (
    <ListGroup>
      <ListGroup.Item>Details</ListGroup.Item>
      <ListGroup.Item>ID : {data.id}</ListGroup.Item>
      <ListGroup.Item>Name : {data.name}</ListGroup.Item>
      <ListGroup.Item>Email : {data.email}</ListGroup.Item>
    </ListGroup>

    
  );
}

export default List;