/// <reference types="./Streamable.create.d.ts" />

import { createInstanceFactory } from "../../../__internal__/mixins.js";
import { StreamableLike_stream, } from "../../../concurrent.js";
import StreamMixin from "../../__mixins__/StreamMixin.js";
const Stream_create = /*@__PURE__*/ (() => createInstanceFactory(StreamMixin()))();
const Streamable_create = (op) => ({
    [StreamableLike_stream]: (scheduler, options) => Stream_create(op, scheduler, options),
});
export default Streamable_create;
