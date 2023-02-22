/// <reference types="./StatefulContainer.takeLast.d.ts" />

import { partial, pipe } from "../../../functions.js";
import StatefulContainer_lift from "./StatefulContainer.lift.js";
const StatefulContainer_takeLast = (m) => (operator) => (options = {}) => {
    const { count = 1 } = options;
    const containerOperator = pipe(operator, partial(count), StatefulContainer_lift(m));
    return container => pipe(container, containerOperator);
};
export default StatefulContainer_takeLast;
