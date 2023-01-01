/// <reference types="./StatefulContainerLike.decodeWithCharset.d.ts" />
import { pipe, partial } from '../../../functions.mjs';
import StatefulContainerLike__lift from './StatefulContainerLike.lift.mjs';

const StatefulContainerLike__decodeWithCharset = (m) => (operator) => (charset = "utf-8") => pipe(operator, partial(charset), StatefulContainerLike__lift(m));

export { StatefulContainerLike__decodeWithCharset as default };
