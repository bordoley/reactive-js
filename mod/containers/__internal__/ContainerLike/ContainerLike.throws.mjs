/// <reference types="./ContainerLike.throws.d.ts" />
import { pipe } from '../../../functions.mjs';
import compute from './ContainerLike.compute.mjs';

const throws = (m, options) => (errorFactory) => pipe(() => {
    const cause = errorFactory();
    throw cause;
}, compute(m, options));

export { throws as default };
