import React from 'react';
import {render} from 'react-dom';
import { wrapWithTransition } from './animationUtils.jsx';

import InnerContainer from './innerContainer.jsx';

class OuterContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showInner: true
        }
    }

    render() {
        return (<div>
            <button onClick={() => this.setState({ showInner: !this.state.showInner })}>Toggle Inner Container</button>
            <InnerContainer in={this.state.showInner} />
        </div>)
    }
}


module.exports = OuterContainer;