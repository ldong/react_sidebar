import React, {Component} from 'react';
import SidebarItem from './SidebarItem.js';

export default class Sidebar extends Component {

  constructor(props) {
      super(props);
  }

  render() {
    const {config} = this.props;
    let sidebarList;

    try {
      if (Array.isArray(config)) {
        sidebarList = config.map((sidebarItemConfig, index, array)=>{
          return (
            <SidebarItem config={sidebarItemConfig} />
          )
        });
      }
    } catch (e){
      console.error('It must be an array of Sidebar Item List config');
      console.error(e.message, e.name);
    }

    return (
      <div className="sidebar">
        {sidebarList}
      </div>
    )
  }
}
