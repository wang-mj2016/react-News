import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import List from './components/List';
import ItemShowLayer from './components/ItemShowLayer';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 111,
          time: 1111,
          title: 'aaaaa',
          content: 'aaaaneirong'
        },
        {
          id: 222,
          time: 222,
          title: 'bbbb',
          content: 'bbbneirong'
        }
      ]
    };
    // this.likedCallback = this.likedCallback.bind(this);
  }
  render() {
    let item = this.state.items[0];
    return (
      <div>
        <List items={this.state.items} />
        <ItemShowLayer item={item} />
      </div>
    );
  }
}

// Profile.propTypes = {
//   name: PropTypes.string.isRequired,
//   age: PropTypes.number.isRequired
// };
const ele = document.createElement('div');
document.body.appendChild(ele);
ReactDOM.render(<Profile />, ele);
