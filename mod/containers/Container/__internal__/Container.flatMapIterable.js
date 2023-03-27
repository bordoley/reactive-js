/// <reference types="./Container.flatMapIterable.d.ts" />

import { compose } from "../../../functions.js";
const Container_flatMapIterable = (concatMap, fromIterable) => (mapper, options) => concatMap(compose(mapper, fromIterable(options)));
export default Container_flatMapIterable;
