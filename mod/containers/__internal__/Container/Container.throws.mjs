/// <reference types="./Container.throws.d.ts" />
import { pipe, raise } from '../../../functions.mjs';
import Container$compute from './Container.compute.mjs';

const Container$throws = (m, options) => (errorFactory) => pipe(() => {
    const err = errorFactory();
    return raise(err);
}, Container$compute(m, options));

export { Container$throws as default };
