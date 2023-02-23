/// <reference types="./StatefulContainer.reduce.d.ts" />

import { partial, pipe, } from "../../../functions.js";
const StatefulContainer_reduce = (lift) => (operator) => (reducer, initialValue) => pipe(operator, partial(reducer, initialValue), lift);
export default StatefulContainer_reduce;
