/// <reference types="./Container.compute.d.ts" />
import { compose, callWith } from '../../../functions.mjs';

const Container_compute = (m, 
// FIXME: How do we omit the start/count options sanely
options) => compose(x => [x], m.fromArray(options), m.map(callWith()));

export { Container_compute as default };
