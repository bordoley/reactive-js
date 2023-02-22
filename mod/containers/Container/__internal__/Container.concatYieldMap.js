/// <reference types="./Container.concatYieldMap.d.ts" />

import { compose, pipe } from "../../../functions.js";
const Container_concatYieldMap = (concatAll, fromIterable, map) => (mapper, options) => compose(map(x => pipe(x, mapper, fromIterable(options))), concatAll());
export default Container_concatYieldMap;
