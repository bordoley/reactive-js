/// <reference types="./StreamableLike.create.d.ts" />
import { newInstance } from '../../../functions.mjs';
import { StreamableLike_stream } from '../../../streaming.mjs';

const create = /*@__PURE__*/ (() => {
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

export { create as default };
