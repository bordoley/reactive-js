/// <reference types="./StatefulContainerLike.keep.d.ts" />
import { pipe, partial } from '../../../functions.mjs';
import lift from './StatefulContainerLike.lift.mjs';

const keep = (m) => (operator) => (predicate) => pipe(operator, partial(predicate), lift(m));

export { keep as default };
