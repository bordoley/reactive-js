/// <reference types="./StatefulContainer.takeLast.d.ts" />
import { pipe, partial } from '../../../functions.mjs';
import StatefulContainer$lift from './StatefulContainer.lift.mjs';

const StatefulContainer$takeLast = (m) => (operator) => (options = {}) => {
    const { count = 1 } = options;
    const containerOperator = pipe(operator, partial(count), StatefulContainer$lift(m));
    return container => pipe(container, containerOperator);
};

export { StatefulContainer$takeLast as default };
