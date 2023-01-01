/// <reference types="./StatefulContainerLike.keep.d.ts" />
import { pipe, partial } from '../../../functions.mjs';
import StatefulContainerLike__lift from './StatefulContainerLike.lift.mjs';

const StatefulContainerLike__keep = (m) => (operator) => (predicate) => pipe(operator, partial(predicate), StatefulContainerLike__lift(m));

export { StatefulContainerLike__keep as default };
