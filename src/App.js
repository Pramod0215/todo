import './App.css';
import React, { Component } from 'react';
import { Button, Card, Col, Container, Form, FormGroup, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactHashtag from "react-hashtag";
import {connect} from 'react-redux';
import * as action from './Store/Actions/Actions';


class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoIncomplete:[],
      todoComplete:[],
      text: '',
      message: '',
      checked:false
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    
    if (this.state.message !== ' ') {
      this.props.AddNew(this.state.message)
      this.setState({
        message:' '
      })
    }
  }
  handleRemove = (index) => {
    this.props.Remove(index)
    // const newList = this.state.todoIncomplete.filter((item, i) => i !== index)
    // this.setState({
    //   todoIncomplete: newList
    // },()=>{
      
    // })
  }
  handleDone = (e,index) => {
    
    if(e.target.checked === true){
      this.props.Done(index)
      this.setState({
        checked:false
      })
    }


  }
  resetAll = () => {
    localStorage.clear();
    window.location.reload(true)
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
                    value={this.state.message}
                    onChange={(e) => this.setState({ message: e.target.value })}
                    type='text' placeholder='Add New Todo' />

                </FormGroup>
                <FormGroup>

                  <Button className='text-center' type='submit'>Add</Button>

                </FormGroup>
              </Form>
              <div>
                {this.props.todoIncomplete !== null || undefined ? this.props.todoIncomplete.filter(item => {
                  return item.message.toLowerCase().includes(this.state.text.toLowerCase())
                }).map((item, index) =>
                  <Card key={index} style={{ margin: 10 }}>
                    <Card.Body className='mt-6 cursor-pointer' >
                      <Row>
                      <input className='m-2'   onChange={(e)=>this.handleDone(e,index)} checked={this.state.checked} name='message' type="checkbox" placeholder='Add New Todo' />
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
                {this.props.todoComplete !== null || undefined ? this.props.todoComplete.filter(item => {
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


const mapToState = state => {
  console.log(state)
  return {
    todoComplete: state.todoComplete,
    todoIncomplete: state.todoIncomplete

  }
}

const mapToDispatch = dispatch => {
  
  return {
    AddNew: (data) => dispatch(action.addNew(data)),
    Remove:(data)=>dispatch(action.remove(data)),
    Done:(data)=>dispatch(action.done(data)),
    
  }
}

export default connect(mapToState, mapToDispatch)(Todo);
// careers@kloudynet.com
// export default Todo;
