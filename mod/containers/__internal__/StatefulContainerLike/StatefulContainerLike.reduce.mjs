/// <reference types="./StatefulContainerLike.reduce.d.ts" />
import { pipe, partial } from '../../../functions.mjs';
import lift from './StatefulContainerLike.lift.mjs';

const reduce = (m) => (operator) => (reducer, initialValue) => pipe(operator, partial(reducer, initialValue), lift(m));

export { reduce as default };
