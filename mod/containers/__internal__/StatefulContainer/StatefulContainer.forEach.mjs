/// <reference types="./StatefulContainer.forEach.d.ts" />
import { pipe, partial } from '../../../functions.mjs';
import StatefulContainer_lift from './StatefulContainer.lift.mjs';

const StatefulContainer_forEach = (m) => (operator) => (effect) => pipe(operator, partial(effect), StatefulContainer_lift(m));

export { StatefulContainer_forEach as default };
