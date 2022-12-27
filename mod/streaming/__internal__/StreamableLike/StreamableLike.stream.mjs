/// <reference types="./StreamableLike.stream.d.ts" />
import { StreamableLike_stream } from '../../../streaming.mjs';

const stream = (scheduler, options) => streamable => streamable[StreamableLike_stream](scheduler, options);

export { stream as default };
