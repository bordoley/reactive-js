/// <reference types="./Container.throws.d.ts" />
import { pipe, raise, error } from '../../../functions.mjs';
import Container_compute from './Container.compute.mjs';

const Container_throws = (m, options) => (errorFactory) => pipe(() => {
    const err = errorFactory();
    return raise(error(err));
}, Container_compute(m, options));

export { Container_throws as default };
