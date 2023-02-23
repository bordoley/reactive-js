/// <reference types="./Runnable.buffer.d.ts" />

import { createInstanceFactory } from "../../../__internal__/mixins.js";
import ReadonlyArray_toRunnable from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.toRunnable.js";
import StatefulContainer_buffer from "../../../containers/StatefulContainer/__internal__/StatefulContainer.buffer.js";
import { pipe } from "../../../functions.js";
import Sink_bufferMixin from "../../Sink/__internal__/Sink.bufferMixin.js";
import Runnable_lift from "./Runnable.lift.js";
const Runnable_buffer = /*@__PURE__*/ (() => {
    const typedBufferSinkMixin = Sink_bufferMixin(ReadonlyArray_toRunnable());
    return pipe(createInstanceFactory(typedBufferSinkMixin), StatefulContainer_buffer(Runnable_lift));
})();
export default Runnable_buffer;
