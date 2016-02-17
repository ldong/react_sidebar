import React, {Component} from 'react';

/**
 * Example
 * const config = {
     left: {
      component: customizedComponentClass
      options: { }
     },
     right: {
      component: 'div' 
      options: { }
     }
   }
 * <CompoundComponent config={config}/>
 */
export default class CompoundComponent extends Component {
  constructor(props) {
      super(props);
  }

  render() {
    try {
      const { config } = this.props;
      let leftChild = React.createElement(config.left.component, config.left.options);
      let rightChild = React.createElement(config.right.component, config.right.options);
    } catch (e) {
      console.error(e.message, e.name);
    }

    return (
      <div className="compound-component">
        <span className="left">{leftChild}</span><span className="right">{rightChild}</span>
      </div>
    )
  }
}
