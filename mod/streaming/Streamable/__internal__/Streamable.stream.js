/// <reference types="./Streamable.stream.d.ts" />

import { StreamableLike_stream, } from "../../../streaming.js";
const Streamable_stream = (scheduler, options) => streamable => streamable[StreamableLike_stream](scheduler, options);
export default Streamable_stream;
