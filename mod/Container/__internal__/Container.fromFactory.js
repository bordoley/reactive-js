/// <reference types="./Container.fromFactory.d.ts" />

import { pipe } from "../../functions.js";
const Container_fromFactory = (fromOptional, map) => (factory, options) => pipe(factory, fromOptional(options), map(f => f()));
export default Container_fromFactory;
