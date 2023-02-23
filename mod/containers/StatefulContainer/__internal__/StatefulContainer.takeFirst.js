/// <reference types="./StatefulContainer.takeFirst.d.ts" />

import { max, partial, pipe } from "../../../functions.js";
const StatefulContainer_takeFirst = (lift) => (operator) => (options = {}) => {
    var _a;
    const { count = max((_a = options.count) !== null && _a !== void 0 ? _a : 1, 0) } = options;
    const containerOperator = pipe(operator, partial(count), lift);
    return container => pipe(container, containerOperator);
};
export default StatefulContainer_takeFirst;
