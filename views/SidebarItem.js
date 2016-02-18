import React, {Component} from 'react';
import Sidebar from './Sidebar.js';

export default class SidebarItem extends Component {

  constructor(props) {
      super(props);

      this.state = {
          isOpen: props.config.isOpen || false,
          isEnabled: !!props.config.children 
      };

      this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.stopPropagation();

    if (this.state.isEnabled) {
      this.setState({
          isOpen: !this.state.isOpen,
      });
    }
  }

  render() {
    const {component, options, children} = this.props.config;
    let sidebarList;
    let sidebarItem;

    try {
      const customizedComponent = React.createElement(component, options);

      let iconClassName;
      if (this.state.isEnabled) {
        if (this.state.isOpen){
          iconClassName = 'fa fa-arrow-down' 
        } else {
          iconClassName = 'fa fa-arrow-right'
        };
      }

      sidebarItem = (
        <div className="sidebar-item">
          <span className={iconClassName}></span>
          {customizedComponent}
        </div>
      )

      if (Array.isArray(children)) {
        sidebarList = children.map((sidebarItemListConfig, index, array)=>{
          return (
            <SidebarItem config={sidebarItemListConfig} />
          )
        });
      }

    } catch (e){
      console.error('Sidebar Item occured some errors');
      console.error(e.message, e.name);
    }
    
    return (
      <div onClick={this.handleClick}>
        {sidebarItem}
        <div className="sidebar-list">
          {this.state.isOpen && this.state.isEnabled && sidebarList}
        </div>
      </div>
    )
  }
}