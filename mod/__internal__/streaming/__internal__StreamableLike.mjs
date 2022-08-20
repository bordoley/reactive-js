/// <reference types="./__internal__StreamableLike.d.ts" />
import { newInstance, getLength, composeUnsafe, pipe } from '../../functions.mjs';
import { dispatch } from '../../scheduling/DispatcherLike.mjs';
import { StreamableLike_stream } from '../../streaming.mjs';
import { createStream } from './__internal__StreamLike.mjs';

const createStreamble = /*@__PURE__*/ (() => {
    class CreateStreamable {
        constructor(stream) {
            this.stream = stream;
        }
        [StreamableLike_stream](scheduler, options) {
            return this.stream(scheduler, options);
        }
    }
    return (stream) => newInstance(CreateStreamable, stream);
})();
const createLiftedFlowable = (...ops) => {
    const op = getLength(ops) > 1
        ? composeUnsafe(...ops)
        : ops[0];
    return createStreamble((scheduler, options) => {
        const stream = createStream(op, scheduler, options);
        return pipe(stream, dispatch("pause"));
    });
};
const createLiftedStreamable = (...ops) => {
    const op = getLength(ops) > 1
        ? composeUnsafe(...ops)
        : ops[0];
    return createStreamble((scheduler, options) => createStream(op, scheduler, options));
};

export { createLiftedFlowable, createLiftedStreamable, createStreamble };
