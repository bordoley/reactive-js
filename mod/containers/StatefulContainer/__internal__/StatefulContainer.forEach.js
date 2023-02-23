/// <reference types="./StatefulContainer.forEach.d.ts" />

import { partial, pipe } from "../../../functions.js";
const StatefulContainer_forEach = (lift) => (operator) => (effect) => pipe(operator, partial(effect), lift);
export default StatefulContainer_forEach;
