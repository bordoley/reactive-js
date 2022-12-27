/// <reference types="./StatefulContainerLike.throwIfEmpty.d.ts" />
import { pipe, partial } from '../../../functions.mjs';
import lift from './StatefulContainerLike.lift.mjs';

const throwIfEmpty = (m) => (operator) => (factory) => pipe(operator, partial(factory), lift(m));

export { throwIfEmpty as default };
