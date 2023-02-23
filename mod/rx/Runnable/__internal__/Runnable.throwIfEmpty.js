/// <reference types="./Runnable.throwIfEmpty.d.ts" />

import { createInstanceFactory } from "../../../__internal__/mixins.js";
import StatefulContainer_throwIfEmpty from "../../../containers/StatefulContainer/__internal__/StatefulContainer.throwIfEmpty.js";
import { pipe } from "../../../functions.js";
import Sink_throwIfEmptyMixin from "../../Sink/__internal__/Sink.throwIfEmptyMixin.js";
import Runnable_lift from "./Runnable.lift.js";
const Runnable_throwIfEmpty = 
/*@__PURE__*/ (() => {
    const typedThrowIfEmptySinkMixin = Sink_throwIfEmptyMixin();
    return pipe(createInstanceFactory(typedThrowIfEmptySinkMixin), StatefulContainer_throwIfEmpty(Runnable_lift));
})();
export default Runnable_throwIfEmpty;
