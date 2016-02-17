import React, {Component} from 'react';
import SidebarItem from './SidebarItem.js';

export default class Sidebar extends Component {

  constructor(props) {
      super(props);
  }

  render() {
    const {config} = this.props;

    let sidebarItems;

    if (Array.isArray(config)) {
      sidebarItems = config.map((sidebarItemConfig, index, array)=>{
        return (
          <SidebarItem config={sidebarItemConfig} />
        )
      });
    } else {
      sidebarItems = (<SidebarItem config={config} />);
      console.log('config', config);
    }

    return (
      <div className="sidebar">
        {sidebarItems}
      </div>
    )
  }
}
