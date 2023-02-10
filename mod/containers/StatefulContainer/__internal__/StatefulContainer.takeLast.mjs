/// <reference types="./StatefulContainer.takeLast.d.ts" />
import { pipe, partial } from '../../../functions.mjs';
import StatefulContainer_lift from './StatefulContainer.lift.mjs';

const StatefulContainer_takeLast = (m) => (operator) => (options = {}) => {
    const { count = 1 } = options;
    const containerOperator = pipe(operator, partial(count), StatefulContainer_lift(m));
    return container => pipe(container, containerOperator);
};

export { StatefulContainer_takeLast as default };
