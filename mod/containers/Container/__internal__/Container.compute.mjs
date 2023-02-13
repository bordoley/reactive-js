/// <reference types="./Container.compute.d.ts" />
import { pipe, callWith } from '../../../functions.mjs';

const Container_compute = (m, factory, options) => {
    const { start, count, ...tail } = (options !== null && options !== void 0 ? options : {});
    return pipe([factory], m.fromReadonlyArray(tail), m.map(callWith()));
};

export { Container_compute as default };
