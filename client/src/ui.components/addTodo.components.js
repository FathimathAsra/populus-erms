import React, { Component } from 'react';
import axios from 'axios';

export default class AddTodoComponent extends Component {

    constructor(props) {
        super(props)

        this.onTaskChange = this.onTaskChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            task: ''
        }
    }

    refreshPage() {
        window.location.reload(false);
    }

    onTaskChange(e) {
        this.setState({
            task: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault()
        const todoObject = {
            task: this.state.task
        };
        axios.post('http://localhost:5000/api/create-todo', todoObject)
            .then((res) => {
                console.log(res.data)
            });

        this.setState({ task: '' })
        this.refreshPage()
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label className="mb-2 poppintitle">Create Task</label>
                        <input type="text" className="form-control" style={{borderRadius: '100px'}} value={this.state.task} onChange={this.onTaskChange} />
                    </div>

                    <div className="d-grid mt-3">
                        <input type="submit" value="Add Task" className="btn btn-inactive" />
                    </div>
                </form>
                <hr className='mb-5'/>
            </div>
        )
    }

}