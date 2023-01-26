/// <reference types="./StatefulContainer.throwIfEmpty.d.ts" />
import { pipe, partial } from '../../../functions.mjs';
import StatefulContainer_lift from './StatefulContainer.lift.mjs';

const StatefulContainer_throwIfEmpty = (m) => (operator) => (factory) => pipe(operator, partial(factory), StatefulContainer_lift(m));

export { StatefulContainer_throwIfEmpty as default };
