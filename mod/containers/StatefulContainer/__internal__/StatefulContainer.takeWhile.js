/// <reference types="./StatefulContainer.takeWhile.d.ts" />

import { partial, pipe } from "../../../functions.js";
const StatefulContainer_takeWhile = (lift) => (operator) => (predicate, options = {}) => {
    const { inclusive = false } = options;
    return pipe(operator, partial(predicate, inclusive), lift);
};
export default StatefulContainer_takeWhile;
