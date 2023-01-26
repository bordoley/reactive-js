/// <reference types="./StatefulContainer.decodeWithCharset.d.ts" />
import { pipe, partial } from '../../../functions.mjs';
import StatefulContainer_lift from './StatefulContainer.lift.mjs';

const StatefulContainer_decodeWithCharset = (m) => (operator) => (charset = "utf-8") => pipe(operator, partial(charset), StatefulContainer_lift(m));

export { StatefulContainer_decodeWithCharset as default };
