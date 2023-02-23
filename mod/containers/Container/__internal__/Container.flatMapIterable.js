/// <reference types="./Container.flatMapIterable.d.ts" />

import { compose, pipe } from "../../../functions.js";
const Container_flatMapIterable = (concatAll, fromIterable, map) => (mapper, options) => compose(map(x => pipe(x, mapper, fromIterable(options))), concatAll());
export default Container_flatMapIterable;
