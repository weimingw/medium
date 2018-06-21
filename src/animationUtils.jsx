import React from 'react';
import Transition from 'react-transition-group/Transition';

const defaultAnimationProps = {
    mountOnEnter: true,
    unmountOnExit: true,
    appear: true,
    enter: true,
    exit: true,
    enterAnimation: (node, done) => done(),
    exitAnimation: (node, done) => done(),
}

function getAnimationProps(props) {
    return Object.assign({}, defaultAnimationProps, props);
}

function wrapWithTransition(WrappedComponent, animationProps) {
    return class extends React.Component {
        constructor(props) {
            super(props);
        }

        endListener(node, done) {
            if (this.props.in) {
                animationProps.enterAnimation(node, done)
            } else {
                animationProps.exitAnimation(node, done)
            }
        }

        render() {
            const { mountOnEnter, unmountOnExit, enter, exit, appear,
                    enterAnimation, exitAnimation } = animationProps;
            return (<Transition in={this.props.in} appear={appear}
                mountOnEnter={mountOnEnter} enter={enter}
                unmountOnExit={unmountOnExit} exit={exit}
                addEndListener={this.endListener.bind(this)}>
                <WrappedComponent {...this.props} ref="component" />
            </Transition>);
        }
    }
}

module.exports = {
    getAnimationProps,
    wrapWithTransition
}