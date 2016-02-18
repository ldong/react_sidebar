import React, {Component} from 'react';

export default class IconComponent extends Component {
  constructor(props) {
      super(props);
  }

  render() {
    return (
      <span className={`icon-component ${this.props.name}`}></span>
    )
  }
}
