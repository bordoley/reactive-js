/// <reference types="./Streamable.createWithConfig.d.ts" />

import { StreamableLike_isEnumerable, StreamableLike_isInteractive, StreamableLike_isRunnable, StreamableLike_stream, } from "../../../streaming.js";
import Stream_create from "../../Stream/__internal__/Stream.create.js";
const Streamable_createWithConfig = ((op, config) => ({
    ...config,
    [StreamableLike_stream]: (scheduler, options) => Stream_create(op, scheduler, options),
}));
export default Streamable_createWithConfig;
