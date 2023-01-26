/// <reference types="./StatefulContainer.keep.d.ts" />
import { pipe, partial } from '../../../functions.mjs';
import StatefulContainer$lift from './StatefulContainer.lift.mjs';

const StatefulContainer$keep = (m) => (operator) => (predicate) => pipe(operator, partial(predicate), StatefulContainer$lift(m));

export { StatefulContainer$keep as default };
