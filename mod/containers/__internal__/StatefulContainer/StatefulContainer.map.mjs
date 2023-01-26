/// <reference types="./StatefulContainer.map.d.ts" />
import { pipe, partial } from '../../../functions.mjs';
import StatefulContainer_lift from './StatefulContainer.lift.mjs';

const StatefulContainer_map = (m) => (operator) => (mapper) => pipe(operator, partial(mapper), StatefulContainer_lift(m));

export { StatefulContainer_map as default };
