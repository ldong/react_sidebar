import React, {Component} from 'react';
import Sidebar from './Sidebar.js';
import CompoundComponent from './CompoundComponent.js';
import IconComponent from './IconComponent.js';
import TextComponent from './TextComponent.js';

export default class MySidebar extends Component {
  constructor(props) {
      super(props);
  }

  render() {
    const config = [
      {
        component: CompoundComponent,
        options: {
          left: {
            component: IconComponent,
            options: { 
              name: "fa fa-globe",
            }
          },
          right: {
            component: TextComponent,
            options: { 
              name: "RESOURCE",
            }
          }
        },
        isOpen: true,
        children: [
          {
            component: TextComponent,
            options: {
              name: 'DATA_CENTER',
            },
          },
          {
            component: TextComponent,
            options: {
              name: 'NODES',
            },
          },
          {
            component: TextComponent,
            options: {
              name: 'VIRTUAL_IPS',
            },
          },
          {
            component: TextComponent,
            options: {
              name: 'HARDWARES',
            },
          },
          {
            component: CompoundComponent,
            options: {
              left: {
                component: IconComponent,
                options: { 
                  name: "fa fa-sitemap"
                }
              },
              right: {
                component: TextComponent,
                options: { 
                  name: 'INSTANCES'
                }
              }
            },
            children: [
              {
                component: TextComponent,
                options: { 
                  name: 'CENTRAL_AUTHORITY'
                }
              },
              { 
                component: TextComponent,
                options: { 
                  name: 'ZEN'
                }
              },
              { 
                component: TextComponent,
                options: { 
                  name: 'NANOLOG'
                }
              },
              { 
                component: TextComponent,
                options: { 
                  name: 'SMTP'
                }
              },
              { 
                component: TextComponent,
                options: { 
                  name: 'BEHAVIOR_ANALYSIS'
                }
              }
            ]
          }
        ]
      }
    ];

    return (
      <div>
        <Sidebar config={[...config]} />
      </div>
    )
  }
}
