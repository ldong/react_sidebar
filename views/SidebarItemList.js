import React, {Component} from 'react';
import SidebarItem from './SidebarItem.js';


export default class SidebarItemList extends Component {

  constructor(props) {
      super(props);
  }

  render() {
    const { config } = this.props;
    let sidebarItem;
    let sidebarList;

    try {
      sidebarItem = <SidebarItem config={config} />

      if (config.children){
       sidebarList = config.children.map((sidebarItemConfig, index, array)=>{
          return (
            <SidebarItem config={sidebarItemConfig} />
          )
        });
      }

    } catch (e){
      console.error(e.message, e.name);
      console.error('It must be an array of Sidebar Item config');
    }

    return (
      <div>
        <div className="sidebar-item">
          {sidebarItem}
        </div>
        <div className="sidebar-list">
          {sidebarList}
        </div>
      </div>
    )
  }
}
