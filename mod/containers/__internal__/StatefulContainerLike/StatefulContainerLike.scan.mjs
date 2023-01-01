/// <reference types="./StatefulContainerLike.scan.d.ts" />
import { pipe, partial } from '../../../functions.mjs';
import StatefulContainerLike__lift from './StatefulContainerLike.lift.mjs';

const StatefulContainerLike__scan = (m) => (operator) => (reducer, initialValue) => pipe(operator, partial(reducer, initialValue), StatefulContainerLike__lift(m));

export { StatefulContainerLike__scan as default };
