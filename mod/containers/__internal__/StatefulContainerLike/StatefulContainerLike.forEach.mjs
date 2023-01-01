/// <reference types="./StatefulContainerLike.forEach.d.ts" />
import { pipe, partial } from '../../../functions.mjs';
import StatefulContainerLike__lift from './StatefulContainerLike.lift.mjs';

const StatefulContainerLike__forEach = (m) => (operator) => (effect) => pipe(operator, partial(effect), StatefulContainerLike__lift(m));

export { StatefulContainerLike__forEach as default };
