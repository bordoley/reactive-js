/// <reference types="./Container.startWith.d.ts" />
import { pipe } from '../../../functions.mjs';
import Container$concatWith from './Container.concatWith.mjs';

const Container$startWith = (m, ...values) => container => pipe(values, m.fromArray(), Container$concatWith(m, container));

export { Container$startWith as default };
