/// <reference types="./StatefulContainer.takeWhile.d.ts" />
import { pipe, partial } from '../../../functions.mjs';
import StatefulContainer_lift from './StatefulContainer.lift.mjs';

const StatefulContainer_takeWhile = (m) => (operator) => (predicate, options = {}) => {
    const { inclusive = false } = options;
    return pipe(operator, partial(predicate, inclusive), StatefulContainer_lift(m));
};

export { StatefulContainer_takeWhile as default };
