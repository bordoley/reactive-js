/// <reference types="./Runnable.someSatisfy.d.ts" />

import { createInstanceFactory } from "../../../__internal__/mixins.js";
import ReadonlyArray_toRunnable from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.toRunnable.js";
import { partial, pipe } from "../../../functions.js";
import Sink_someSatisfyMixin from "../../Sink/__internal__/Sink.someSatisfyMixin.js";
import Runnable_lift from "./Runnable.lift.js";
const Runnable_someSatisfy = 
/*@__PURE__*/ (() => {
    const typedSomeSatisfySinkMixin = Sink_someSatisfyMixin(ReadonlyArray_toRunnable());
    return (predicate) => pipe(createInstanceFactory(typedSomeSatisfySinkMixin), partial(predicate), Runnable_lift);
})();
export default Runnable_someSatisfy;
