/// <reference types="./StatefulContainer.takeWhile.d.ts" />

import { partial, pipe } from "../../../functions.js";
import StatefulContainer_lift from "./StatefulContainer.lift.js";
const StatefulContainer_takeWhile = (m) => (operator) => (predicate, options = {}) => {
    const { inclusive = false } = options;
    return pipe(operator, partial(predicate, inclusive), StatefulContainer_lift(m));
};
export default StatefulContainer_takeWhile;
