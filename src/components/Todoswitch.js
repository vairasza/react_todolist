import React from 'react';
import './Todoswitch.css';

class Todoswitch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            checked: false,
        }
    }

    handleCheckbox() {
        this.setState(state => ({
            checked: !state.checked,
        }),
        () => {
            this.props.showOnlyOpen(this.state.checked);
        })
    }

    render() {
        return <div className="switch-container">
            <input className="checkbox-switch" type="checkbox" name="switcher" onChange={this.handleCheckbox.bind(this)} />
            { (this.state.checked) ? <span>showing only open items in your list</span> : <span>showing all items in your list</span> }
        </div>;
    }
} 

export default Todoswitch;