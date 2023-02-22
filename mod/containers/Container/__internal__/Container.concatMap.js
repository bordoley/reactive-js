/// <reference types="./Container.concatMap.d.ts" />

import { compose } from "../../../functions.js";
const Container_concatMap = (m, mapper) => compose(m.map(mapper), m.concatAll());
export default Container_concatMap;
