/// <reference types="./Container.flatMapIterable.d.ts" />

import { compose } from "../../../functions.js";
const Container_flatMapIterable = (concatMap, fromIterable) => (selector, options) => concatMap(compose(selector, fromIterable(options)));
export default Container_flatMapIterable;
