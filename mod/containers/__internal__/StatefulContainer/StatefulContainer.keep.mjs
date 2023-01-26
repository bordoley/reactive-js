/// <reference types="./StatefulContainer.keep.d.ts" />
import { pipe, partial } from '../../../functions.mjs';
import StatefulContainer_lift from './StatefulContainer.lift.mjs';

const StatefulContainer_keep = (m) => (operator) => (predicate) => pipe(operator, partial(predicate), StatefulContainer_lift(m));

export { StatefulContainer_keep as default };
