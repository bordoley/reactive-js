/// <reference types="./StatefulContainerLike.takeLast.d.ts" />
import { pipe, partial } from '../../../functions.mjs';
import StatefulContainerLike__lift from './StatefulContainerLike.lift.mjs';

const StatefulContainerLike__takeLast = (m) => (operator) => (options = {}) => {
    const { count = 1 } = options;
    const containerOperator = pipe(operator, partial(count), StatefulContainerLike__lift(m));
    return container => pipe(container, containerOperator);
};

export { StatefulContainerLike__takeLast as default };
