/// <reference types="./StatefulContainer.forEach.d.ts" />
import { pipe, partial } from '../../../functions.mjs';
import StatefulContainer$lift from './StatefulContainer.lift.mjs';

const StatefulContainer$forEach = (m) => (operator) => (effect) => pipe(operator, partial(effect), StatefulContainer$lift(m));

export { StatefulContainer$forEach as default };
