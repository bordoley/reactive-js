/// <reference types="./StatefulContainer.keep.d.ts" />

import { partial, pipe } from "../../../functions.js";
import StatefulContainer_lift from "./StatefulContainer.lift.js";
const StatefulContainer_keep = (m) => (operator) => (predicate) => pipe(operator, partial(predicate), StatefulContainer_lift(m));
export default StatefulContainer_keep;
