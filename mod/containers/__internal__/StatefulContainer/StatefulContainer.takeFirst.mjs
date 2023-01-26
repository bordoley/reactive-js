/// <reference types="./StatefulContainer.takeFirst.d.ts" />
import { max, pipe, partial } from '../../../functions.mjs';
import StatefulContainer_lift from './StatefulContainer.lift.mjs';

const StatefulContainer_takeFirst = (m) => (operator) => (options = {}) => {
    var _a;
    const { count = max((_a = options.count) !== null && _a !== void 0 ? _a : 1, 0) } = options;
    const containerOperator = pipe(operator, partial(count), StatefulContainer_lift(m));
    return container => pipe(container, containerOperator);
};

export { StatefulContainer_takeFirst as default };
