import React from 'react';
import './Todoinput.css';

class Todoinput extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            input: "",
            newItem: "",
        }
    }

    handleClick () {
        this.setState((state) => ({
            newItem: state.input,
            input: "",
        }), () => {
            this.props.handleItems(this.state.newItem);
        })
    }

    handleChange(e) {
        this.setState({
            input: e.target.value,
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState((state) => ({
            newItem: state.input,
            input: "",
        }), () => {
            this.props.handleItems(this.state.newItem);
        })
    }

    render() {
        return <div className="todoinput-container">
            <form className="todoinput-form" onSubmit={this.handleSubmit.bind(this)}>
                <input 
                    className="text-input" type="text" 
                    value={this.state.input} 
                    onChange={this.handleChange.bind(this)} 
                    placeholder="Type in a new item..."
                />
                <button className="button-input" type="submit">+</button>
            </form>
        </div>
    } 
}

export default Todoinput;