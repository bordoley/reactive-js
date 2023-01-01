/// <reference types="./StatefulContainerLike.throwIfEmpty.d.ts" />
import { pipe, partial } from '../../../functions.mjs';
import StatefulContainerLike__lift from './StatefulContainerLike.lift.mjs';

const StatefulContainerLike__throwIfEmpty = (m) => (operator) => (factory) => pipe(operator, partial(factory), StatefulContainerLike__lift(m));

export { StatefulContainerLike__throwIfEmpty as default };
