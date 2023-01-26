/// <reference types="./StatefulContainer.skipFirst.d.ts" />
import { pipe, partial } from '../../../functions.mjs';
import StatefulContainer$lift from './StatefulContainer.lift.mjs';

const StatefulContainer$skipFirst = (m) => (operator) => (options = {}) => {
    const { count = 1 } = options;
    const lifted = pipe(operator, partial(count), StatefulContainer$lift(m));
    return container => (count > 0 ? pipe(container, lifted) : container);
};

export { StatefulContainer$skipFirst as default };
