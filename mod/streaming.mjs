/// <reference types="./streaming.d.ts" />
import './containers.mjs';

/** @ignore */
const StreamableLike_stream = Symbol("StreamableLike_stream");
const FlowMode_resume = Symbol("FlowMode_resume");
const FlowMode_pause = Symbol("FlowMode_pause");

export { FlowMode_pause, FlowMode_resume, StreamableLike_stream };
