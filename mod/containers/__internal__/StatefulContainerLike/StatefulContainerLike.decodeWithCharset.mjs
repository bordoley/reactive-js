/// <reference types="./StatefulContainerLike.decodeWithCharset.d.ts" />
import { pipe, partial } from '../../../functions.mjs';
import lift from './StatefulContainerLike.lift.mjs';

const decodeWithCharset = (m) => (operator) => (charset = "utf-8") => pipe(operator, partial(charset), lift(m));

export { decodeWithCharset as default };
