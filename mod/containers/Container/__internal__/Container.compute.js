/// <reference types="./Container.compute.d.ts" />

import { callWith, pipe } from "../../../functions.js";
const Container_compute = (fromOptional, map) => (factory, options) => {
    return pipe(factory, fromOptional(options), map(callWith()));
};
export default Container_compute;
