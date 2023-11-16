import './App.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Description from './Description';
import Image from './Image';
import Name from './Name';
import Price from './Price';


function App() {
  return (
<>

<Name/>
<Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Buy the new TESLA here</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Mohamed riahi</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    <Card  className="polaroid" style={{ width: '80%' }}>
   
      <Image />
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item></ListGroup.Item>
        <ListGroup.Item><Description/></ListGroup.Item>
        <ListGroup.Item></ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#"></Card.Link>
        <Card.Link href="#"></Card.Link>
      </Card.Body>
    </Card>
    <Price />
    
</>
  );
}

export default App;








