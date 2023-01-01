/// <reference types="./StatefulContainerLike.reduce.d.ts" />
import { pipe, partial } from '../../../functions.mjs';
import StatefulContainerLike__lift from './StatefulContainerLike.lift.mjs';

const StatefulContainerLike__reduce = (m) => (operator) => (reducer, initialValue) => pipe(operator, partial(reducer, initialValue), StatefulContainerLike__lift(m));

export { StatefulContainerLike__reduce as default };
