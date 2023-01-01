/// <reference types="./StreamableLike.createLifted.d.ts" />
import { getLength, composeUnsafe } from '../../../functions.mjs';
import StreamLike__create from '../StreamLike/StreamLike.create.mjs';
import StreamableLike__create from './StreamableLike.create.mjs';

const StreamableLike__createLifted = (...ops) => {
    const op = getLength(ops) > 1
        ? composeUnsafe(...ops)
        : ops[0];
    return StreamableLike__create((scheduler, options) => StreamLike__create(op, scheduler, options));
};

export { StreamableLike__createLifted as default };
