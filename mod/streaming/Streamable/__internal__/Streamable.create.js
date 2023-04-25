/// <reference types="./Streamable.create.d.ts" />

import Stream_create from "../../../rx/Stream/__internal__/Stream.create.js";
import { StreamableLike_stream } from "../../../streaming.js";
const Streamable_create = (op) => ({
    [StreamableLike_stream]: (scheduler, options) => Stream_create(op, scheduler, options),
});
export default Streamable_create;
