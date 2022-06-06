import React, { Component } from 'react';
import axios from 'axios';
import Modal from 'react-modal';


export default class ViewTodoComponent extends Component {

    taskObj = {
        _id: '',
        task: ''
    }

    state = {
        modalIsOpen: false,
        secondModalIsOpen: false
    };

    openModal = (data) => {
        this.setState({
            modalIsOpen: true
        });

        this.setTodoVal(data);
    };

    setTodoVal = (data) => {
        this.taskObj = {
            _id: data._id,
            task: data.task
        }
    }

    closeModal = () => {
        this.setState({ modalIsOpen: false });
    };

    openSecondModal = () => {
        this.setState({ secondModalIsOpen: true });
    };

    closeSecondModal = () => {
        this.setState({ secondModalIsOpen: false });
    };



    constructor(props) {
        super(props)

        this.state = {
            todos: []
        };

        this.deleteTodo = this.deleteTodo.bind(this);
    }

    componentDidMount() {
        this.getTodos();
    }

    getTodos() {
        const headers = { 'Content-Type': 'application/json' }

        const endpoint = 'http://localhost:5000/api';

        axios.get(endpoint, { headers })
            .then(response => {
                this.setState({
                    todos: response.data
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteTodo(id) {
        axios.delete('http://localhost:5000/api/delete-todo/' + id)
            .then((res) => {
                alert('Todo deleted!')
                this.getTodos();
            }).catch((error) => {
                console.log(error)
            })
    }


    onTaskChange(e) {
        this.taskObj = {
            _id: this.taskObj._id,
            task: e.target.value
        }

        e = new Event('input', { bubbles: true });
        this.myinput.dispatchEvent(e);
    }



    refreshPage() {
        window.location.reload(false);
    }

    onUpdate = () => {
        axios.put('http://localhost:5000/api/update-todo/' + this.taskObj._id, this.taskObj)
            .then((res) => {
                console.log('Todo updated' + res)
                this.refreshPage()
            }).catch((error) => {
                console.log(error)
            })
    }




    render() {
        const { todos } = this.state;
        return (
            <>
                {todos.map((data) => (
                    <ul className="list-group mt-3" key={data._id}>
                            <li className="list-group-item d-flex justify-content-between align-items-start align-middle mx-2" >
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">{data.task}</div>
                                </div>


                                <button className="btn btn-inactive-green" onClick={this.openModal.bind(this, data)}>Update</button>
                                &nbsp;
                                &nbsp;
                                <button className="btn btn-inactive-danger" onClick={this.deleteTodo.bind(this, data._id)}>Delete</button>
                            </li>
                            

                    </ul>

                ))}


                {/* Edit */}
                <Modal isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal} ariaHideApp={false}>

                    <div className="container">
                        <div className="form-group">
                            <label className="mb-2"><strong>Update Task</strong></label>
                            <input
                                type="text"
                                className="form-control"
                                defaultValue={this.taskObj.task}
                                onChange={(e) => { this.onTaskChange(e) }} ref={(input) => this.myinput = input}
                                style={{ borderRadius: '100px' }}
                            />
                        </div>

                        <div className="d-grid mt-3 gap-2">
                            <input type="button" onClick={this.onUpdate} value="Update" className="btn btn-success" style={{ borderRadius: '100px' }} />
                            <button onClick={this.closeModal} className="btn btn-warning" style={{ borderRadius: '100px' }}>close</button>
                        </div>
                    </div>
                </Modal>
            </>
        )
    }

}