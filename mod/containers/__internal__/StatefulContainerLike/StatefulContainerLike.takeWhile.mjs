/// <reference types="./StatefulContainerLike.takeWhile.d.ts" />
import { pipe, partial } from '../../../functions.mjs';
import StatefulContainerLike__lift from './StatefulContainerLike.lift.mjs';

const StatefulContainerLike__takeWhile = (m) => (operator) => (predicate, options = {}) => {
    const { inclusive = false } = options;
    return pipe(operator, partial(predicate, inclusive), StatefulContainerLike__lift(m));
};

export { StatefulContainerLike__takeWhile as default };
