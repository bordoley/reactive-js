/// <reference types="./FlowableLike.createLifted.d.ts" />
import { getLength, composeUnsafe, pipe } from '../../../functions.mjs';
import DispatcherLike__dispatch from '../../../scheduling/__internal__/DispatcherLike/DispatcherLike.dispatch.mjs';
import StreamLike__create from '../StreamLike/StreamLike.create.mjs';
import StreamableLike__create from '../StreamableLike/StreamableLike.create.mjs';

const FlowableLike__createLifted = (...ops) => {
    const op = getLength(ops) > 1
        ? composeUnsafe(...ops)
        : ops[0];
    return StreamableLike__create((scheduler, options) => {
        const stream = StreamLike__create(op, scheduler, options);
        return pipe(stream, DispatcherLike__dispatch("pause"));
    });
};

export { FlowableLike__createLifted as default };
