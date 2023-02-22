/// <reference types="./StatefulContainer.scan.d.ts" />

import { partial, pipe, } from "../../../functions.js";
import StatefulContainer_lift from "./StatefulContainer.lift.js";
const StatefulContainer_scan = (m) => (operator) => (reducer, initialValue) => pipe(operator, partial(reducer, initialValue), StatefulContainer_lift(m));
export default StatefulContainer_scan;
