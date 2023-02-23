/// <reference types="./StatefulContainer.map.d.ts" />

import { partial, pipe } from "../../../functions.js";
const StatefulContainer_map = (lift) => (operator) => (mapper) => pipe(operator, partial(mapper), lift);
export default StatefulContainer_map;
