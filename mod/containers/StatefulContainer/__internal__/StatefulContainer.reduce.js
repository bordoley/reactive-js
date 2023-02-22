/// <reference types="./StatefulContainer.reduce.d.ts" />

import { partial, pipe, } from "../../../functions.js";
import StatefulContainer_lift from "./StatefulContainer.lift.js";
const StatefulContainer_reduce = (m) => (operator) => (reducer, initialValue) => pipe(operator, partial(reducer, initialValue), StatefulContainer_lift(m));
export default StatefulContainer_reduce;
