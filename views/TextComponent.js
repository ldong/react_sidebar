import React, {Component} from 'react';

export default class TextComponent extends Component {
  constructor(props) {
      super(props);
  }

  render() {
    return (
        <span className='text-component'>{this.props.name}</span>
    )
  }
}
