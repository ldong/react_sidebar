import React, {Component} from 'react';
import SidebarItemList from './SidebarItem.js';

export default class Sidebar extends Component {

  constructor(props) {
      super(props);
  }

  render() {
    const {config} = this.props;
    let sidebarItemLists;

    try {
      if (Array.isArray(config)) {
        sidebarItemLists = config.map((sidebarItemListConfig, index, array)=>{
          console.log();
          return (
            <SidebarItemList config={sidebarItemListConfig} />
          )
        });
      }
    } catch (e){
      console.error('It must be an array of Sidebar Item List config');
      console.error(e.message, e.name);
    }

    return (
      <div className="sidebar">
        {sidebarItemLists}
      </div>
    )
  }
}
