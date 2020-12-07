import React from 'react';
import './App.css';
import Titlebar from './components/Titlebar';
import Todoinput from './components/Todoinput';
import Todoitems from './components/Todoitems';
import Todoswitch from './components/Todoswitch';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      items: [],
      key: 0,
      checked: false,
    }
  }

  handleItems(item) {
    this.setState(state => ({
      items: [...state.items, { item: item, key: state.key, status: false, change: false }],
      key: this.state.key + 1,
    }));
  }

  removeItem(id) {
    this.setState(state => ({
      items: [...state.items.filter(item => item.key !== id)],
    }))
  }

  handleEdit(id) {
    const newList = [...this.state.items];
    newList.forEach((item) => {
      if (item.key === id) {
        item.change = !item.change;
      }
    })

    this.setState({
      items: [...newList],
    });
  }

  handleStatus(id) {
    const newList = [...this.state.items];
    newList.forEach((item) => {
      if (item.key === id) {
        item.status = !item.status;
      }
    })

    this.setState({
      items: [...newList],
    });
  }

  updateEdit(id, content) {
    const newList = [...this.state.items];
    newList.forEach((item) => {
      if (item.key === id) {
        item.item = content;
        item.change = !item.change;
      }
    })

    this.setState({
      items: [...newList],
    });
  
  }

  showOnlyOpen(checkboxChecked) {
    this.setState({
      checked: checkboxChecked,
    })
  }

  render() {
    return (
      <div className="App">
        <Titlebar />
        <Todoinput handleItems={this.handleItems.bind(this)}/>
        <Todoitems
          items={this.state.items}
          check={this.state.checked}
          removeItem={this.removeItem.bind(this)}
          handleStatus={this.handleStatus.bind(this)}
          handleEdit={this.handleEdit.bind(this)}
          updateEdit={this.updateEdit.bind(this)}
        />
        <Todoswitch showOnlyOpen={this.showOnlyOpen.bind(this)}/>
      </div>
    );
  }
}

export default App;