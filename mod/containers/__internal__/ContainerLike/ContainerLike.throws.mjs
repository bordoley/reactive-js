/// <reference types="./ContainerLike.throws.d.ts" />
import { pipe } from '../../../functions.mjs';
import ContainerLike__compute from './ContainerLike.compute.mjs';

const ContainerLike__throws = (m, options) => (errorFactory) => pipe(() => {
    const cause = errorFactory();
    throw cause;
}, ContainerLike__compute(m, options));

export { ContainerLike__throws as default };
