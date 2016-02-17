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
      
      console.log('state', this.state);
      this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.stopPropagation();

    if(this.state.isEnabled){
      this.setState({
          isOpen: !this.state.isOpen,
      });
    }
    console.log('handleClick clicked');
  }

  render() {
    const {name, component, options, children} = this.props.config;
    let sidebarItemLists;
    let sidebarItem;

    try {
      const compoundComponent = React.createElement(component, options);

      sidebarItem = (
        <div className="sidebar-item">
          <div>
            {this.state.isEnabled ? this.state.isOpen ? 'v' : '>'  : ""}
          </div>
          <div>
           {compoundComponent}
          </div>
          <div> 
            <span>TEXT</span>
          </div>
        </div>
      )

      if (children) {
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
      <div onClick={this.handleClick}>
        <div className="sidebar-item">
          {sidebarItem}      
        </div>
        <div className={this.state.isOpen && this.state.isEnabled ? "sidebar-item" : "sidebar-item hidden"}>
          {sidebarItemLists}
        </div>
      </div>
    )
  }
}