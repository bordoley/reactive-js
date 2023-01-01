/// <reference types="./StatefulContainerLike.takeFirst.d.ts" />
import { max, pipe, partial } from '../../../functions.mjs';
import StatefulContainerLike__lift from './StatefulContainerLike.lift.mjs';

const StatefulContainerLike__takeFirst = (m) => (operator) => (options = {}) => {
    var _a;
    const { count = max((_a = options.count) !== null && _a !== void 0 ? _a : 1, 0) } = options;
    const containerOperator = pipe(operator, partial(count), StatefulContainerLike__lift(m));
    return container => pipe(container, containerOperator);
};

export { StatefulContainerLike__takeFirst as default };
