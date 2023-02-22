/// <reference types="./Streamable.create.d.ts" />

import { newInstance } from "../../../functions.js";
import { StreamableLike_stream, } from "../../../streaming.js";
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
export default Streamable_create;
