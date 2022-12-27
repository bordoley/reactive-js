/// <reference types="./ContainerLike.compute.d.ts" />
import { compose, callWith } from '../../../functions.mjs';

const compute = (m, options) => compose(x => [x], m.fromArray({
    ...options,
}), m.map(callWith()));

export { compute as default };
