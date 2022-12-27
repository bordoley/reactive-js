/// <reference types="./FlowableLike.createLifted.d.ts" />
import { getLength, composeUnsafe, pipe } from '../../../functions.mjs';
import { dispatch } from '../../../scheduling/DispatcherLike.mjs';
import create$1 from '../StreamLike/StreamLike.create.mjs';
import create from '../StreamableLike/StreamableLike.create.mjs';

const createLifted = (...ops) => {
    const op = getLength(ops) > 1
        ? composeUnsafe(...ops)
        : ops[0];
    return create((scheduler, options) => {
        const stream = create$1(op, scheduler, options);
        return pipe(stream, dispatch("pause"));
    });
};

export { createLifted as default };
