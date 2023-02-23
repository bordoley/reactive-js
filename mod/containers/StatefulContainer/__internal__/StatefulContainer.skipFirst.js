/// <reference types="./StatefulContainer.skipFirst.d.ts" />

import { partial, pipe } from "../../../functions.js";
const StatefulContainer_skipFirst = (lift) => (operator) => (options = {}) => {
    const { count = 1 } = options;
    const lifted = pipe(operator, partial(count), lift);
    return container => (count > 0 ? pipe(container, lifted) : container);
};
export default StatefulContainer_skipFirst;
