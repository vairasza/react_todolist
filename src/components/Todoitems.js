import React from 'react';
import Todoitem from './Todoitem';
import './Todoitems.css';

class Todoitems extends React.Component {

    handleRemove(input) {
        this.props.removeItem(input);
    }

    handleStatus(input) {
        this.props.handleStatus(input);
    }

    handleEdit(input) {
        this.props.handleEdit(input);
    }

    updateEdit(id, item) {
        this.props.updateEdit(id, item);
    }

    render() {
        const items = (this.props.check) ? this.props.items.filter(item => !item.status) : this.props.items;
        return <div className="todos-item-container">
            {items.map(item => 
                <Todoitem key={item.key} 
                    item={item} 
                    handleRemove={this.handleRemove.bind(this)}
                    handleStatus={this.handleStatus.bind(this)}
                    handleEdit={this.handleEdit.bind(this)}
                    updateEdit={this.updateEdit.bind(this)}
                />
            )}
        </div>;        
    }
} 

export default Todoitems;