/// <reference types="./Container.fromFactory.d.ts" />

import { callWith, pipe } from "../../../functions.js";
const Container_fromFactory = (fromOptional, map) => (factory, options) => pipe(factory, fromOptional(options), map(callWith()));
export default Container_fromFactory;
