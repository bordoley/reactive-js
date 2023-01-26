/// <reference types="./StatefulContainer.takeWhile.d.ts" />
import { pipe, partial } from '../../../functions.mjs';
import StatefulContainer$lift from './StatefulContainer.lift.mjs';

const StatefulContainer$takeWhile = (m) => (operator) => (predicate, options = {}) => {
    const { inclusive = false } = options;
    return pipe(operator, partial(predicate, inclusive), StatefulContainer$lift(m));
};

export { StatefulContainer$takeWhile as default };
