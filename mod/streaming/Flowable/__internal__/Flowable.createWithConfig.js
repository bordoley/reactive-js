/// <reference types="./Flowable.createWithConfig.d.ts" />

import { StreamableLike_isEnumerable, StreamableLike_isInteractive, StreamableLike_isRunnable, StreamableLike_stream, } from "../../../streaming.js";
import FlowableStream_create from "./FlowableStream.create.js";
const Flowable_createWithConfig = (op, config) => ({
    ...config,
    [StreamableLike_isEnumerable]: false,
    [StreamableLike_isInteractive]: false,
    [StreamableLike_stream]: (scheduler, options) => FlowableStream_create(op, scheduler, options),
});
export default Flowable_createWithConfig;
