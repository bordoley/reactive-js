/// <reference types="./Container.throws.d.ts" />
import { raise, error } from '../../../functions.mjs';
import Container_compute from './Container.compute.mjs';

const Container_throws = (m, options) => {
    const { raise: factory = raise } = options !== null && options !== void 0 ? options : {};
    return Container_compute(m, () => raise(error(factory())), options);
};

export { Container_throws as default };
