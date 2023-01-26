/// <reference types="./StatefulContainer.scan.d.ts" />
import { pipe, partial } from '../../../functions.mjs';
import StatefulContainer$lift from './StatefulContainer.lift.mjs';

const StatefulContainer$scan = (m) => (operator) => (reducer, initialValue) => pipe(operator, partial(reducer, initialValue), StatefulContainer$lift(m));

export { StatefulContainer$scan as default };
