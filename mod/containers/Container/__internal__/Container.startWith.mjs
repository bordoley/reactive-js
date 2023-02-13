/// <reference types="./Container.startWith.d.ts" />
import { pipe } from '../../../functions.mjs';
import Container_concatWith from './Container.concatWith.mjs';

const Container_startWith = (m, ...values) => container => pipe(values, m.fromReadonlyArray(), Container_concatWith(m, container));

export { Container_startWith as default };
