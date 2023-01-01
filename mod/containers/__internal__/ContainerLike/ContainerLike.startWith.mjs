/// <reference types="./ContainerLike.startWith.d.ts" />
import { pipe } from '../../../functions.mjs';
import ContainerLike__concatWith from './ContainerLike.concatWith.mjs';

const ContainerLike__startWith = (m, ...values) => container => pipe(values, m.fromArray(), ContainerLike__concatWith(m, container));

export { ContainerLike__startWith as default };
