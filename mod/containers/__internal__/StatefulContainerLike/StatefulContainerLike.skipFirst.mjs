/// <reference types="./StatefulContainerLike.skipFirst.d.ts" />
import { pipe, partial } from '../../../functions.mjs';
import StatefulContainerLike__lift from './StatefulContainerLike.lift.mjs';

const StatefulContainerLike__skipFirst = (m) => (operator) => (options = {}) => {
    const { count = 1 } = options;
    const lifted = pipe(operator, partial(count), StatefulContainerLike__lift(m));
    return container => (count > 0 ? pipe(container, lifted) : container);
};

export { StatefulContainerLike__skipFirst as default };
