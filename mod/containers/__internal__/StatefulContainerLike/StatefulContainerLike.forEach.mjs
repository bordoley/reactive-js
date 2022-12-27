/// <reference types="./StatefulContainerLike.forEach.d.ts" />
import { pipe, partial } from '../../../functions.mjs';
import lift from './StatefulContainerLike.lift.mjs';

const forEach = (m) => (operator) => (effect) => pipe(operator, partial(effect), lift(m));

export { forEach as default };
