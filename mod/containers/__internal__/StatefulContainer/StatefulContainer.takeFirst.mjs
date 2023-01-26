/// <reference types="./StatefulContainer.takeFirst.d.ts" />
import { max, pipe, partial } from '../../../functions.mjs';
import StatefulContainer$lift from './StatefulContainer.lift.mjs';

const StatefulContainer$takeFirst = (m) => (operator) => (options = {}) => {
    var _a;
    const { count = max((_a = options.count) !== null && _a !== void 0 ? _a : 1, 0) } = options;
    const containerOperator = pipe(operator, partial(count), StatefulContainer$lift(m));
    return container => pipe(container, containerOperator);
};

export { StatefulContainer$takeFirst as default };
