/// <reference types="./ContainerLike.startWith.d.ts" />
import { pipe } from '../../../functions.mjs';
import concatWith from './ContainerLike.concatWith.mjs';

const startWith = (m, ...values) => container => pipe(values, m.fromArray(), concatWith(m, container));

export { startWith as default };
