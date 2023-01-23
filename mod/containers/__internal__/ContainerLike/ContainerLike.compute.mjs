/// <reference types="./ContainerLike.compute.d.ts" />
import { compose, callWith } from '../../../functions.mjs';

const ContainerLike__compute = (m, 
// FIXME: How do we omit the start/count options sanely
options) => compose(x => [x], m.fromArray(options), m.map(callWith()));

export { ContainerLike__compute as default };
