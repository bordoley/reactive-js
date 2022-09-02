/// <reference types="./FlowableLike.create.d.ts" />
import { getLength, composeUnsafe, pipe } from '../../functions.mjs';
import { dispatch } from '../../scheduling/DispatcherLike.mjs';
import { createStream } from './StreamLike.internal.mjs';
import { createStreamble } from './StreamableLike.create.mjs';

const createLiftedFlowable = (...ops) => {
    const op = getLength(ops) > 1
        ? composeUnsafe(...ops)
        : ops[0];
    return createStreamble((scheduler, options) => {
        const stream = createStream(op, scheduler, options);
        return pipe(stream, dispatch("pause"));
    });
};

export { createLiftedFlowable };
