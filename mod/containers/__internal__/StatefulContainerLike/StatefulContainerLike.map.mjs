/// <reference types="./StatefulContainerLike.map.d.ts" />
import { pipe, partial } from '../../../functions.mjs';
import StatefulContainerLike__lift from './StatefulContainerLike.lift.mjs';

const StatefulContainerLike__map = (m) => (operator) => (mapper) => pipe(operator, partial(mapper), StatefulContainerLike__lift(m));

export { StatefulContainerLike__map as default };
