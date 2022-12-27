/// <reference types="./StatefulContainerLike.map.d.ts" />
import { pipe, partial } from '../../../functions.mjs';
import lift from './StatefulContainerLike.lift.mjs';

const map = (m) => (operator) => (mapper) => pipe(operator, partial(mapper), lift(m));

export { map as default };
