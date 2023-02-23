/// <reference types="./Runnable.takeFirst.d.ts" />

import { createInstanceFactory } from "../../../__internal__/mixins.js";
import StatefulContainer_takeFirst from "../../../containers/StatefulContainer/__internal__/StatefulContainer.takeFirst.js";
import { pipe } from "../../../functions.js";
import Sink_takeFirstMixin from "../../Sink/__internal__/Sink.takeFirstMixin.js";
import Runnable_lift from "./Runnable.lift.js";
const Runnable_takeFirst = 
/*@__PURE__*/ (() => {
    const typedTakeFirstSinkMixin = Sink_takeFirstMixin();
    return pipe(createInstanceFactory(typedTakeFirstSinkMixin), StatefulContainer_takeFirst(Runnable_lift));
})();
export default Runnable_takeFirst;
