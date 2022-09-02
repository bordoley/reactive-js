/// <reference types="./StreamableLike.create.d.ts" />
import { newInstance, getLength, composeUnsafe } from '../../functions.mjs';
import { StreamableLike_stream } from '../../streaming.mjs';
import { createStream } from './StreamLike.internal.mjs';

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
const createLiftedStreamable = (...ops) => {
    const op = getLength(ops) > 1
        ? composeUnsafe(...ops)
        : ops[0];
    return createStreamble((scheduler, options) => createStream(op, scheduler, options));
};

export { createLiftedStreamable, createStreamble };
