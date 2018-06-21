import React from 'react';
import {render} from 'react-dom';

function createHigherOrderComponent(WrappedComponent, params) {
    return class extends React.Component {
        render() {
            return (<div>
                This is a higher order component. It received some params: {JSON.stringify(params)}
                <WrappedComponent {...this.props} />
            </div>)
        }
    }
}

class ExampleComponent extends React.Component {
    render() {
        return <div>Some inner component</div>
    }
}

const NewComponent = createHigherOrderComponent(ExampleComponent, { a: 1, b: 2 });

render(<NewComponent />, document.getElementById('content'));