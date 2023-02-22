/// <reference types="./Container.concatMap.d.ts" />

import { compose } from "../../../functions.js";
const Container_concatMap = (map, concatAll) => (mapper) => compose(map(mapper), concatAll());
export default Container_concatMap;
