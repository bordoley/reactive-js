/// <reference types="./StatefulContainer.skipFirst.d.ts" />
import { pipe, partial } from '../../../functions.mjs';
import StatefulContainer_lift from './StatefulContainer.lift.mjs';

const StatefulContainer_skipFirst = (m) => (operator) => (options = {}) => {
    const { count = 1 } = options;
    const lifted = pipe(operator, partial(count), StatefulContainer_lift(m));
    return container => (count > 0 ? pipe(container, lifted) : container);
};

export { StatefulContainer_skipFirst as default };
