/// <reference types="./StatefulContainer.reduce.d.ts" />
import { pipe, partial } from '../../../functions.mjs';
import StatefulContainer$lift from './StatefulContainer.lift.mjs';

const StatefulContainer$reduce = (m) => (operator) => (reducer, initialValue) => pipe(operator, partial(reducer, initialValue), StatefulContainer$lift(m));

export { StatefulContainer$reduce as default };
