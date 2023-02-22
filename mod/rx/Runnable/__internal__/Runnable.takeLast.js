/// <reference types="./Runnable.takeLast.d.ts" />

import { createInstanceFactory } from "../../../__internal__/mixins.js";
import ReadonlyArray_toRunnable from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.toRunnable.js";
import StatefulContainer_takeLast from "../../../containers/StatefulContainer/__internal__/StatefulContainer.takeLast.js";
import { pipe } from "../../../functions.js";
import Sink_takeLastMixin from "../../Sink/__internal__/Sink.takeLastMixin.js";
import Runnable_liftT from "./Runnable.liftT.js";
const Runnable_takeLast = /*@__PURE__*/ (() => {
    const typedTakeLastSinkMixin = Sink_takeLastMixin(ReadonlyArray_toRunnable());
    return pipe(createInstanceFactory(typedTakeLastSinkMixin), StatefulContainer_takeLast(Runnable_liftT));
})();
export default Runnable_takeLast;
