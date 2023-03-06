/// <reference types="./Streamable.create.d.ts" />

import { StreamableLike_isEnumerable, StreamableLike_isInteractive, StreamableLike_isRunnable, StreamableLike_stream, } from "../../../streaming.js";
const Streamable_create = ((stream, isInteractive, isEnumerable, isRunnable) => ({
    [StreamableLike_isEnumerable]: isEnumerable,
    [StreamableLike_isInteractive]: isInteractive,
    [StreamableLike_isRunnable]: isRunnable,
    [StreamableLike_stream]: stream,
}));
export default Streamable_create;
