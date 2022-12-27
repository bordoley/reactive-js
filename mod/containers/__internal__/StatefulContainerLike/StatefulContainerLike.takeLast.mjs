/// <reference types="./StatefulContainerLike.takeLast.d.ts" />
import { pipe, partial } from '../../../functions.mjs';
import lift from './StatefulContainerLike.lift.mjs';

const takeLast = (m) => (operator) => (options = {}) => {
    const { count = 1 } = options;
    const containerOperator = pipe(operator, partial(count), lift(m));
    return container => pipe(container, containerOperator);
};

export { takeLast as default };
