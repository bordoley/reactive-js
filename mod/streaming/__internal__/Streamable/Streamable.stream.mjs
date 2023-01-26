/// <reference types="./Streamable.stream.d.ts" />
import { StreamableLike_stream } from '../../../streaming.mjs';

const Streamable_stream = (scheduler, options) => streamable => streamable[StreamableLike_stream](scheduler, options);

export { Streamable_stream as default };
