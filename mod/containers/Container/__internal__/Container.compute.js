/// <reference types="./Container.compute.d.ts" />

import { callWith, pipe } from "../../../functions.js";
const Container_compute = (fromReadonlyArray, map) => (factory, options) => {
    const { start, count, ...tail } = (options !== null && options !== void 0 ? options : {});
    return pipe([factory], fromReadonlyArray(tail), map(callWith()));
};
export default Container_compute;
