/// <reference types="./Streamable.stream.d.ts" />
import { StreamableLike_stream } from '../../../streaming.mjs';

const Streamable$stream = (scheduler, options) => streamable => streamable[StreamableLike_stream](scheduler, options);

export { Streamable$stream as default };
