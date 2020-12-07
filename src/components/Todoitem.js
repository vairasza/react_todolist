import React from 'react';
import './Todoitem.css';

class Todoitem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          input: this.props.item.item,
        }
    }

    handleRemove() {
        this.props.handleRemove(this.props.item.key);
    }

    handleEdit() {
        if (!this.props.item.change) {
            this.props.handleEdit(this.props.item.key);
        }
        else {
            this.setState((state) => ({
                input: state.input,
            }), () => {
                this.props.updateEdit(this.props.item.key, this.state.input);
            })
        }
    }

    handleStatus() {
        this.props.handleStatus(this.props.item.key);
    }

    handleChange(e) {
        this.setState({
            input: e.target.value,
        })
    }

    render() {
        const item = this.props.item;
        const textDisplayStyle = `text-display ${(this.props.item.status) ? "crossed" : ""}`;

        return <div className="todoitem-container" >
                <input className="checkbox" type="checkbox" onChange={this.handleStatus.bind(this)} checked={item.status}/>
                { (item.change) 
                    ? <input className="text-input-items" type="text" value={this.state.input} onChange={this.handleChange.bind(this)} /> 
                    : <div className={textDisplayStyle}>{item.item}</div> }
                <button className="buttonEdit" type="button" onClick={this.handleEdit.bind(this)}>&#x270e;</button>
                <button className="buttonDel"type="button" onClick={this.handleRemove.bind(this)}>X</button>
                </div>;
    }
} 

export default Todoitem;