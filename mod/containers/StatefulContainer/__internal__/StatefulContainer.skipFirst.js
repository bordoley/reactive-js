/// <reference types="./StatefulContainer.skipFirst.d.ts" />

import { partial, pipe } from "../../../functions.js";
import StatefulContainer_lift from "./StatefulContainer.lift.js";
const StatefulContainer_skipFirst = (m) => (operator) => (options = {}) => {
    const { count = 1 } = options;
    const lifted = pipe(operator, partial(count), StatefulContainer_lift(m));
    return container => (count > 0 ? pipe(container, lifted) : container);
};
export default StatefulContainer_skipFirst;
