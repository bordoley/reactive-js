/// <reference types="./StreamableLike.stream.d.ts" />
import { StreamableLike_stream } from '../../../streaming.mjs';

const StreamableLike__stream = (scheduler, options) => streamable => streamable[StreamableLike_stream](scheduler, options);

export { StreamableLike__stream as default };
