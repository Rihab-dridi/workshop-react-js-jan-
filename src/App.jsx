import { Container, Navbar, Nav, Form, Button } from "react-bootstrap";
import "./test.css"
function App() {
const name="rihab"


  return (
    <div className="App">
  
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Workshop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">List</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
{      console.log('hello')}
      <img className="happyFace" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Happy_smiley_face.png/480px-Happy_smiley_face.png" alt="happy face"/>
      <h1 style={{backgroundColor:"red"}} >hello there  </h1>
      <br/>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default App;
