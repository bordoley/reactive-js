/// <reference types="./StatefulContainer.forEach.d.ts" />

import { partial, pipe } from "../../../functions.js";
import StatefulContainer_lift from "./StatefulContainer.lift.js";
const StatefulContainer_forEach = (m) => (operator) => (effect) => pipe(operator, partial(effect), StatefulContainer_lift(m));
export default StatefulContainer_forEach;
