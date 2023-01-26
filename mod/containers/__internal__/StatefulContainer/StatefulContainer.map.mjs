/// <reference types="./StatefulContainer.map.d.ts" />
import { pipe, partial } from '../../../functions.mjs';
import StatefulContainer$lift from './StatefulContainer.lift.mjs';

const StatefulContainer$map = (m) => (operator) => (mapper) => pipe(operator, partial(mapper), StatefulContainer$lift(m));

export { StatefulContainer$map as default };
