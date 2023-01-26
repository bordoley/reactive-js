/// <reference types="./StatefulContainer.decodeWithCharset.d.ts" />
import { pipe, partial } from '../../../functions.mjs';
import StatefulContainer$lift from './StatefulContainer.lift.mjs';

const StatefulContainer$decodeWithCharset = (m) => (operator) => (charset = "utf-8") => pipe(operator, partial(charset), StatefulContainer$lift(m));

export { StatefulContainer$decodeWithCharset as default };
