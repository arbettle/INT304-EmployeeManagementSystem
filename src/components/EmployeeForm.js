import React from 'react';
import '../EmployeeForm.css';

class EmployeeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            title: '',
            department: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit(event) {
        event.preventDefault();
        // Log the current state to the console
        console.log(this.state);
        // Reset the state
        this.setState({
            name: '',
            email: '',
            title: '',
            department: ''
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={this.state.name}
                    onChange={this.handleInputChange}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                />
                <input
                    type="text"
                    name="title"
                    placeholder="Job Title"
                    value={this.state.title}
                    onChange={this.handleInputChange}
                />
                <input
                    type="text"
                    name="department"
                    placeholder="Department"
                    value={this.state.department}
                    onChange={this.handleInputChange}
                />
                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default EmployeeForm;
