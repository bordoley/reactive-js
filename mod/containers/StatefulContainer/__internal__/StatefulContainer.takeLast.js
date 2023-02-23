/// <reference types="./StatefulContainer.takeLast.d.ts" />

import { partial, pipe } from "../../../functions.js";
const StatefulContainer_takeLast = (lift) => (operator) => (options = {}) => {
    const { count = 1 } = options;
    const containerOperator = pipe(operator, partial(count), lift);
    return container => pipe(container, containerOperator);
};
export default StatefulContainer_takeLast;
