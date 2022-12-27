/// <reference types="./StatefulContainerLike.takeWhile.d.ts" />
import { pipe, partial } from '../../../functions.mjs';
import lift from './StatefulContainerLike.lift.mjs';

const takeWhile = (m) => (operator) => (predicate, options = {}) => {
    const { inclusive = false } = options;
    return pipe(operator, partial(predicate, inclusive), lift(m));
};

export { takeWhile as default };
