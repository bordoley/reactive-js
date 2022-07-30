/// <reference types="./StatefulContainerLikeInternal.d.ts" />
import { pipe, partial, max, none } from '../../functions.mjs';
import '../../util/DisposableLike.mjs';
import { addIgnoringChildErrors, addTo, onComplete, dispose } from '../util/DisposableLikeInternal.mjs';

const interactive = 0;
const reactive = 1;
const lift = ({ lift, }) => lift;
const createSkipFirstOperator = (m) => (operator) => (options = {}) => {
    const { count = 1 } = options;
    const lifted = pipe(operator, partial(count), lift(m));
    return container => (count > 0 ? pipe(container, lifted) : container);
};
const createTakeFirstOperator = (m) => (operator) => (options = {}) => {
    var _a;
    const { count = max((_a = options.count) !== null && _a !== void 0 ? _a : 1, 0) } = options;
    const lifted = pipe(operator, partial(count), lift(m));
    return container => (count > 0 ? pipe(container, lifted) : m.empty());
};
const createTakeWhileOperator = (m) => (operator) => (predicate, options = {}) => {
    const { inclusive = false } = options;
    return pipe(operator, partial(predicate, inclusive), lift(m));
};
const createThrowIfEmptyOperator = (m) => (operator) => (factory) => pipe((delegate) => {
    const lifted = pipe(delegate, operator, m.variance === interactive
        ? addIgnoringChildErrors(delegate)
        : addTo(delegate));
    const { parent, child } = m.variance === interactive
        ? { parent: lifted, child: delegate }
        : { parent: delegate, child: lifted };
    pipe(child, onComplete(() => {
        let error = none;
        if (lifted.isEmpty) {
            let cause = none;
            try {
                cause = factory();
            }
            catch (e) {
                cause = e;
            }
            error = { cause };
        }
        pipe(parent, dispose(error));
    }));
    return lifted;
}, lift(m));

export { createSkipFirstOperator, createTakeFirstOperator, createTakeWhileOperator, createThrowIfEmptyOperator, interactive, reactive };
