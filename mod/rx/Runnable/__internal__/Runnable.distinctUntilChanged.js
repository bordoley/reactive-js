/// <reference types="./Runnable.distinctUntilChanged.d.ts" />

import { createInstanceFactory } from "../../../__internal__/mixins.js";
import StatefulContainer_distinctUntilChanged from "../../../containers/StatefulContainer/__internal__/StatefulContainer.distinctUntilChanged.js";
import { pipe } from "../../../functions.js";
import Sink_distinctUntilChangedMixin from "../../Sink/__internal__/Sink.distinctUntilChangedMixin.js";
import Runnable_lift from "./Runnable.lift.js";
const Runnable_distinctUntilChanged = 
/*@__PURE__*/ (() => {
    const typedDistinctUntilChangedSinkMixin = Sink_distinctUntilChangedMixin();
    return pipe(createInstanceFactory(typedDistinctUntilChangedSinkMixin), StatefulContainer_distinctUntilChanged(Runnable_lift));
})();
export default Runnable_distinctUntilChanged;
