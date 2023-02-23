/// <reference types="./StatefulContainer.scan.d.ts" />

import { partial, pipe, } from "../../../functions.js";
const StatefulContainer_scan = (lift) => (operator) => (reducer, initialValue) => pipe(operator, partial(reducer, initialValue), lift);
export default StatefulContainer_scan;
