/// <reference types="./Container.flatMapIterable.d.ts" />

import { compose } from "../../../functions.js";
const Container_flatMapIterable = (concatMap, fromIterable) => (selector) => concatMap(compose(selector, fromIterable()));
export default Container_flatMapIterable;
