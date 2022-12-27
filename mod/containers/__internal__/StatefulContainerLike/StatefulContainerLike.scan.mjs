/// <reference types="./StatefulContainerLike.scan.d.ts" />
import { pipe, partial } from '../../../functions.mjs';
import lift from './StatefulContainerLike.lift.mjs';

const scan = (m) => (operator) => (reducer, initialValue) => pipe(operator, partial(reducer, initialValue), lift(m));

export { scan as default };
