/// <reference types="./Streamable.create.d.ts" />
import { newInstance } from '../../../functions.mjs';
import { StreamableLike_stream } from '../../../streaming.mjs';

const Streamable_stream = Symbol("Streamable_stream");
class Streamable {
    constructor(stream) {
        this[Streamable_stream] = stream;
    }
    [StreamableLike_stream](scheduler, options) {
        return this[Streamable_stream](scheduler, options);
    }
}
const Streamable_create = (stream) => newInstance(Streamable, stream);

export { Streamable_create as default };
