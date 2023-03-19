/// <reference types="./Streamable.createLifted.d.ts" />

import { StreamableLike_isEnumerable, StreamableLike_isInteractive, StreamableLike_isRunnable, StreamableLike_stream, } from "../../../streaming.js";
import Stream_create from "../../Stream/__internal__/Stream.create.js";
const Streamable_createLifted = ((op, isInteractive, isEnumerable, isRunnable) => ({
    [StreamableLike_isEnumerable]: isEnumerable,
    [StreamableLike_isInteractive]: isInteractive,
    [StreamableLike_isRunnable]: isRunnable,
    [StreamableLike_stream]: (scheduler, options) => Stream_create(op, scheduler, options),
}));
export default Streamable_createLifted;
