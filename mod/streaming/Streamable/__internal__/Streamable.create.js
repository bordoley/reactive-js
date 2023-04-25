/// <reference types="./Streamable.create.d.ts" />

import { StreamableLike_stream } from "../../../streaming.js";
import Stream_create from "../../../streaming/Stream/__internal__/Stream.create.js";
const Streamable_create = (op) => ({
    [StreamableLike_stream]: (scheduler, options) => Stream_create(op, scheduler, options),
});
export default Streamable_create;
