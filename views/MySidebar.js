import React, {Component} from 'react';
import Sidebar from './Sidebar.js';

export default class MySidebar extends Component {
  constructor(props) {
      super(props);
  }

  render() {
    const config = [
      {
        name: 'RESOURCE',
        component: 'text',
        options: { },
        isOpen: true,
        children: [
          {
            name: 'DATA_CENTER',
            component: 'text',
            options: { }
          },
          
          {
            name: 'NODES',
            component: 'text',
            options: { },
          },

          {
            name: 'INSTANCES',
            component: 'text',
            options: { },
            children: [
              {
                name: 'CENTRAL_AUTHORITY',
                component: 'text',
                options: { },
              },
              {
                name: 'ZEN',
                component: 'text',
                options: { },
              }
            ]
          }
        ]
      }
    ];

    return (
      <div>
        <Sidebar config={config} />
      </div>
    )
  }
}
