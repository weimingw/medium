import React from 'react';
import {render} from 'react-dom';

import { wrapWithTransition } from './animationUtils.jsx';
import { fade } from './animationFactory.jsx';

class InnerContainer extends React.Component {
    render() {
        return (<div>
            Inner Container            
        </div>)
    }
}


module.exports = wrapWithTransition(InnerContainer, fade(500));