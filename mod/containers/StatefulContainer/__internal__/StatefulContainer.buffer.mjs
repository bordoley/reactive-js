/// <reference types="./StatefulContainer.buffer.d.ts" />
import { MAX_SAFE_INTEGER } from '../../../constants.mjs';
import { max, pipe, partial } from '../../../functions.mjs';
import StatefulContainer_lift from './StatefulContainer.lift.mjs';

const StatefulContainer_buffer = (m) => (operator) => (options = {}) => {
    var _a;
    const maxBufferSize = max((_a = options.maxBufferSize) !== null && _a !== void 0 ? _a : MAX_SAFE_INTEGER, 1);
    return pipe(operator, partial(maxBufferSize), StatefulContainer_lift(m));
};

export { StatefulContainer_buffer as default };
