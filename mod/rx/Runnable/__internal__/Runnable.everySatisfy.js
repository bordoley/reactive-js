/// <reference types="./Runnable.everySatisfy.d.ts" />

import { createInstanceFactory } from "../../../__internal__/mixins.js";
import ReadonlyArray_toRunnable from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.toRunnable.js";
import { partial, pipe } from "../../../functions.js";
import Sink_everySatisfyMixin from "../../Sink/__internal__/Sink.everySatisfyMixin.js";
import Runnable_lift from "./Runnable.lift.js";
const Runnable_everySatisfy = 
/*@__PURE__*/ (() => {
    const typedEverySatisfySinkMixin = Sink_everySatisfyMixin(ReadonlyArray_toRunnable());
    return (predicate) => pipe(createInstanceFactory(typedEverySatisfySinkMixin), partial(predicate), Runnable_lift);
})();
export default Runnable_everySatisfy;
