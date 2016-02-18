import React, {Component} from 'react';
import SidebarItem from './SidebarItem.js';

export default class SidebarItemList extends Component {

  constructor(props) {
      super(props);
  }

  render() {
    let sidebarItem;

    try {
      sidebarItem = <SidebarItem config={this.props.config} />
    } catch (e){
      console.error(e.message, e.name);
      console.error('It must be an array of Sidebar Item config');
    }

    return (
      <div className="sidebar-list">
          {sidebarItem} 
      </div>
    )
  }
}
