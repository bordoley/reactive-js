/// <reference types="./Streamable.create.d.ts" />
import { newInstance } from '../../../functions.mjs';
import { StreamableLike_stream } from '../../../streaming.mjs';

const Streamable$create = /*@__PURE__*/ (() => {
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

export { Streamable$create as default };
