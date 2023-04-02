/// <reference types="./Container.concatMap.d.ts" />

import { compose } from "../../../functions.js";
const Container_concatMap = (map, concatAll) => (mapper, options) => compose(map(mapper), concatAll(options));
export default Container_concatMap;
