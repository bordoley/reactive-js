/// <reference types="./Streamable.create.d.ts" />

import { createInstanceFactory } from "../../../__internal__/mixins.js";
import { StreamableLike_stream, } from "../../../computations.js";
import StreamMixin from "../../__mixins__/StreamMixin.js";
const Streamable_create = /*@__PURE__*/ (() => {
    const Stream_create = createInstanceFactory(StreamMixin());
    return (op) => ({
        [StreamableLike_stream]: (scheduler, options) => Stream_create(op, scheduler, options),
    });
})();
export default Streamable_create;
