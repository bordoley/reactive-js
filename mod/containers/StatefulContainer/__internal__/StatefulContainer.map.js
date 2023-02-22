/// <reference types="./StatefulContainer.map.d.ts" />

import { partial, pipe } from "../../../functions.js";
import StatefulContainer_lift from "./StatefulContainer.lift.js";
const StatefulContainer_map = (m) => (operator) => (mapper) => pipe(operator, partial(mapper), StatefulContainer_lift(m));
export default StatefulContainer_map;
