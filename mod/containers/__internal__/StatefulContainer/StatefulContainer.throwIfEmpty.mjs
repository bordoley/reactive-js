/// <reference types="./StatefulContainer.throwIfEmpty.d.ts" />
import { pipe, partial } from '../../../functions.mjs';
import StatefulContainer$lift from './StatefulContainer.lift.mjs';

const StatefulContainer$throwIfEmpty = (m) => (operator) => (factory) => pipe(operator, partial(factory), StatefulContainer$lift(m));

export { StatefulContainer$throwIfEmpty as default };
