import React, {Component} from 'react';
import Sidebar from './Sidebar.js';
import SidebarItemList from './SidebarItemList.js';

export default class SidebarItem extends Component {

  constructor(props) {
      super(props);

      this.state = {
          isOpen: props.config.isOpen || false,
          isEnabled: !!props.config.children 
      };
      // console.log('state', this.state);
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
    let sidebarItemLists;
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
        sidebarItemLists = children.map((sidebarItemListConfig, index, array)=>{
          return (
            <SidebarItemList config={sidebarItemListConfig} />
          )
        });
      }

    } catch (e){
      console.error('Sidebar Item occured some errors');
      console.error(e.message, e.name);
    }
    
    return (
      <div class="sidebar-item-list-placeholder" onClick={this.handleClick}>
        {sidebarItem}
        {this.state.isOpen && this.state.isEnabled && sidebarItemLists}
      </div>
    )
  }
}