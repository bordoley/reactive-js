/// <reference types="./Runnable.reduce.d.ts" />

import { createInstanceFactory } from "../../../__internal__/mixins.js";
import ReadonlyArray_toRunnable from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.toRunnable.js";
import StatefulContainer_reduce from "../../../containers/StatefulContainer/__internal__/StatefulContainer.reduce.js";
import { pipe } from "../../../functions.js";
import Sink_reduceMixin from "../../Sink/__internal__/Sink.reduceMixin.js";
import Runnable_liftT from "./Runnable.liftT.js";
const Runnable_reduce = /*@__PURE__*/ (() => {
    const typedReduceSinkMixin = Sink_reduceMixin(ReadonlyArray_toRunnable());
    return pipe(createInstanceFactory(typedReduceSinkMixin), StatefulContainer_reduce(Runnable_liftT));
})();
export default Runnable_reduce;
