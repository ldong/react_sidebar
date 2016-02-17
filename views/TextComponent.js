import React, {Component} from 'react';

export default class TextComponent extends Component {
  constructor(props) {
      super(props);
  }

  render() {
    return (
      <div>
        TEXT-COMPONENT
        <span className="text-component">{this.props.name}</span>
      </div>
    )
  }
}
