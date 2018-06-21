
import { getAnimationProps } from './animationUtils.jsx';

function fade(enterDuration, exitDuration=enterDuration) {
    return getAnimationProps({
        enterAnimation: (node, done) => {
            node.animate([
                { opacity: 0 },
                { opacity: 1 }
            ], {
                duration: enterDuration,
                easing: 'ease-in'
            }).onfinish = () => done();
        },
        exitAnimation: (node, done) => {
            node.animate([
                { opacity: 1 },
                { opacity: 0 }
            ], {
                duration: exitDuration,
                easing: 'ease-out'
            }).onfinish = () => done();
        }
    })
}

module.exports = {
    fade
}