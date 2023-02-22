/// <reference types="./Container.compute.d.ts" />

import { callWith, pipe } from "../../../functions.js";
const Container_compute = (m, factory, options) => {
    const { start, count, ...tail } = (options !== null && options !== void 0 ? options : {});
    return pipe([factory], m.fromReadonlyArray(tail), m.map(callWith()));
};
export default Container_compute;
