import React, { Component } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom'


export default class ViewTodoComponentDashboard extends Component {

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

                            <NavLink className="nav-link btn-inactive" to="/tasks" style={{paddingTop: 0, paddingBottom: 0,}}>View</NavLink>
                        </li>
                        

                    </ul>
                ))}
            </>
        )
    }

}