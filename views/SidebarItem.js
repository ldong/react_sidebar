import React, {Component} from 'react';
import Sidebar from './Sidebar.js';

export default class SidebarItem extends Component {

  constructor(props) {
      super(props);

      this.state = {
          isOpen: props.config.isOpen,
          isEnabled: !!props.config.children 
      };

      this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    console.log('clicked');
    this.setState({
        isOpen: !this.state.isOpen,
        isEnabled: !!this.state.isEnabled 
    });

    e.stopPropagation();
  }

  render() {
    const {name, component, options, children} = this.props.config;

    const sidebars = children && children.map((sidebarConfig, index, array)=>{
        return (
          <Sidebar config={sidebarConfig} />
        )
    });
    console.log('this.state.isOpen && this.state.isEnabled', this.state.isOpen && this.state.isEnabled);

    return (
      <div onClick={this.handleClick}>
        <div>
          <label>NAME: </label><span>{name}</span>
        </div>
        
        <div>
          <label>COMPONENT_TYPE: </label><span>{component}</span>
        </div>

        <div className={this.state.isOpen && this.state.isEnabled ? "sidebar" : "sidebar hidden"}>
          {sidebars}
        </div>
      </div>
    )
  }
}