/// <reference types="./StatefulContainerLike.d.ts" />
import { empty } from '../../containers/ContainerLike.mjs';
import { addIgnoringChildErrors, addTo, onComplete, dispose } from '../../util/DisposableLike.mjs';
import { none } from '../../util/Option.mjs';
import { strictEquality, pipe, newInstanceWith, max } from '../../util/functions.mjs';

const interactive = 0;
const reactive = 1;
const lift = ({ lift, }) => lift;
const distinctUntilChanged = (m) => (Constructor) => (options = {}) => {
    const { equality = strictEquality } = options;
    return pipe((delegate) => pipe(Constructor, newInstanceWith(delegate, equality)), lift(m));
};
const keep = (m) => (Constructor) => (predicate) => pipe((delegate) => pipe(Constructor, newInstanceWith(delegate, predicate)), lift(m));
const map = (m) => (Constructor) => (mapper) => pipe((delegate) => pipe(Constructor, newInstanceWith(delegate, mapper)), lift(m));
const onNotify = (m, Constructor) => (onNotify) => pipe((delegate) => pipe(Constructor, newInstanceWith(delegate, onNotify)), lift(m));
const pairwise = (m) => (Constructor) => () => pipe((delegate) => pipe(Constructor, newInstanceWith(delegate)), lift(m));
const scan = (m) => (Constructor) => (reducer, initialValue) => pipe((delegate) => pipe(Constructor, newInstanceWith(delegate, reducer, initialValue())), lift(m));
const skipFirst = (m) => (Constructor) => (options = {}) => {
    const { count = 1 } = options;
    const operator = delegate => pipe(Constructor, newInstanceWith(delegate, count));
    const lifted = pipe(operator, lift(m));
    return runnable => (count > 0 ? pipe(runnable, lifted) : runnable);
};
const takeFirst = (m) => (Constructor) => (options = {}) => {
    var _a;
    const { count = max((_a = options.count) !== null && _a !== void 0 ? _a : 1, 0) } = options;
    const operator = delegate => pipe(Constructor, newInstanceWith(delegate, count));
    const lifted = pipe(operator, lift(m));
    return source => (count > 0 ? pipe(source, lifted) : empty(m));
};
const takeWhile = (m) => (Constructor) => (predicate, options = {}) => {
    const { inclusive = false } = options;
    return pipe((delegate) => pipe(Constructor, newInstanceWith(delegate, predicate, inclusive)), lift(m));
};
const createThrowIfEmptyOperator = (m) => (Constructor) => (factory) => pipe((delegate) => {
    const lifted = pipe(Constructor, newInstanceWith(delegate), m.variance === interactive
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

export { createThrowIfEmptyOperator, distinctUntilChanged, interactive, keep, lift, map, onNotify, pairwise, reactive, scan, skipFirst, takeFirst, takeWhile };
