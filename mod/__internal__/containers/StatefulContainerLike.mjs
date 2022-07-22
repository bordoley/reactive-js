/// <reference types="./StatefulContainerLike.d.ts" />
import { empty } from '../../containers/ContainerLike.mjs';
import { addIgnoringChildErrors, addTo, onComplete } from '../../util/DisposableLike.mjs';
import { none } from '../../util/Option.mjs';
import { pipe, max } from '../../util/functions.mjs';
import { dispose } from '../util/DisposableLike.mjs';

const interactive = 0;
const reactive = 1;
const lift = ({ lift, }) => lift;
const createScanOperator = (m) => (Constructor) => (reducer, initialValue) => pipe(Constructor(reducer, initialValue()), lift(m));
const createSkipFirstOperator = (m) => (Constructor) => (options = {}) => {
    const { count = 1 } = options;
    const operator = Constructor(count);
    const lifted = pipe(operator, lift(m));
    return runnable => (count > 0 ? pipe(runnable, lifted) : runnable);
};
const createTakeFirstOperator = (m) => (Constructor) => (options = {}) => {
    var _a;
    const { count = max((_a = options.count) !== null && _a !== void 0 ? _a : 1, 0) } = options;
    const operator = Constructor(count);
    const lifted = pipe(operator, lift(m));
    return source => (count > 0 ? pipe(source, lifted) : empty(m));
};
const createTakeWhileOperator = (m) => (Constructor) => (predicate, options = {}) => {
    const { inclusive = false } = options;
    return pipe(Constructor(predicate, inclusive), lift(m));
};
const createThrowIfEmptyOperator = (m) => (Constructor) => (factory) => pipe((delegate) => {
    const lifted = pipe(delegate, Constructor(), m.variance === interactive
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

export { createScanOperator, createSkipFirstOperator, createTakeFirstOperator, createTakeWhileOperator, createThrowIfEmptyOperator, interactive, lift, reactive };
