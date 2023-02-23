/// <reference types="./Container.flatMapIterable.d.ts" />

import { pipe } from "../../../functions.js";
const Container_flatMapIterable = (concatMap, fromIterable) => (mapper, options) => concatMap(x => pipe(x, mapper, fromIterable(options)));
export default Container_flatMapIterable;
