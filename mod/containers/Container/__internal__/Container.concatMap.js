/// <reference types="./Container.concatMap.d.ts" />

import { compose } from "../../../functions.js";
const Container_concatMap = (map, concatAll) => (selector, options) => compose(map(selector), concatAll(options));
export default Container_concatMap;
