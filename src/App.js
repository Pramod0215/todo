import './App.css';
import React, { Component } from 'react';
import { Button, Card, Col, Container, Form, FormGroup, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactHashtag from "react-hashtag";



class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoIncomplete: [],
      todoComplete: [],
      text: '',
      message: ''
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.message !== ' ') {
      this.setState({
        todoIncomplete: [...this.state.todoIncomplete, { message: this.state.message }].reverse(),
        message:' '
      })
    }
  }
  handleRemove = (index) => {
    const newList = this.state.todoIncomplete.filter((item, i) => i !== index)
    this.setState({
      todoIncomplete: newList
    })
  }
  handleDone = (index) => {
    const newList = this.state.todoIncomplete.filter((item, i) => {
      if (i === index) {
        return item.message
      }
    })
    const list = this.state.todoIncomplete.filter((item, i) => i !== index)
    console.log('newlist', newList, index)
    this.setState({
      todoComplete: [...this.state.todoComplete, newList],
      isChecked: true,
      todoIncomplete: list
    })


  }
  resetAll = () => {
    this.setState({
      todoIncomplete: [],
      todoComplete: []
    })
  }
  render() {
    return (
      <React.Fragment>
        <header className='App'>
          <h1>Todo </h1>
        </header>
        <Container>

          <Row>
            <Col md={3}>
              <Form.Control onChange={(e) => this.setState({ text: e.target.value })} type='text' placeholder='Search..' />

            </Col>
            <Col md={6}>


              <Form onSubmit={this.handleSubmit}>
                <FormGroup>

                  <Form.Control name='message'
                    defaultValue={this.state.message}
                    onChange={(e) => this.setState({ message: e.target.value })}
                    type='text' placeholder='Add New Todo' />

                </FormGroup>
                <FormGroup>

                  <Button className='text-center' type='submit'>Add</Button>

                </FormGroup>
              </Form>
              <div>
                {this.state.todoIncomplete !== null ? this.state.todoIncomplete.filter(item => {
                  return item.message.toLowerCase().includes(this.state.text.toLowerCase())
                }).map((item, index) =>
                  <Card key={index} style={{ margin: 10 }}>
                    <Card.Body className='mt-6 cursor-pointer' onClick={() => this.handleDone(index)}>
                      <Row>
                      
                        <div className='m-2'>
                          <ReactHashtag>{item.message} </ReactHashtag>
                        </div>
                      </Row>
                      <Button variant="danger" onClick={() => this.handleRemove(index)}>cancel</Button>{' '}
                    </Card.Body>
                  </Card>
                ) : null}
              </div>
              
              <div>
                {this.state.todoComplete !== null ? this.state.todoComplete.filter(item => {
                  return item[0].message.toLowerCase().includes(this.state.text.toLowerCase())
                }).map((item, index) =>
                  <Card key={index} style={{ margin: 10 }}>
                    <Card.Body>
                      <Row>
                        <input className='m-2' checked name='message' type="checkbox" placeholder='Add New Todo' />

                        <div className='m-2'>
                          <ReactHashtag>{item[0].message} </ReactHashtag>
                        </div>
                      </Row>
                      <small>Done</small>
                    </Card.Body>
                  </Card>
                ) : null}
              </div>

            </Col>
            <Col md={3}>

              <Button variant="danger" className='float-right' onClick={() => this.resetAll()}>Reset</Button>

            </Col>
          </Row>

        </Container>
      </React.Fragment>
    )
  }
}
// careers@kloudynet.com
export default Todo;
