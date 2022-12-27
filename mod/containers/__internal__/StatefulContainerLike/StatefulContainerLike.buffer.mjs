/// <reference types="./StatefulContainerLike.buffer.d.ts" />
import { MAX_SAFE_INTEGER } from '../../../__internal__/constants.mjs';
import { max, pipe, partial } from '../../../functions.mjs';
import lift from './StatefulContainerLike.lift.mjs';

const buffer = (m) => (operator) => (options = {}) => {
    var _a;
    const maxBufferSize = max((_a = options.maxBufferSize) !== null && _a !== void 0 ? _a : MAX_SAFE_INTEGER, 1);
    return pipe(operator, partial(maxBufferSize), lift(m));
};

export { buffer as default };
