/// <reference types="./ContainerLike.throws.d.ts" />
import { pipe, raise } from '../../../functions.mjs';
import ContainerLike__compute from './ContainerLike.compute.mjs';

const ContainerLike__throws = (m, options) => (errorFactory) => pipe(() => {
    const err = errorFactory();
    return raise(err);
}, ContainerLike__compute(m, options));

export { ContainerLike__throws as default };
