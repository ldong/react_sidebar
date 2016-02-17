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
    let leftChild; 
    let rightChild;
    try {
      const {left, right} = this.props;
      leftChild = React.createElement(left.component, left.options);
      rightChild = React.createElement(right.component, right.options);
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
