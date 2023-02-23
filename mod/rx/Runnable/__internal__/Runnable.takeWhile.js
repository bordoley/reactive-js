/// <reference types="./Runnable.takeWhile.d.ts" />

import { createInstanceFactory } from "../../../__internal__/mixins.js";
import StatefulContainer_takeWhile from "../../../containers/StatefulContainer/__internal__/StatefulContainer.takeWhile.js";
import { pipe } from "../../../functions.js";
import Sink_takeWhileMixin from "../../Sink/__internal__/Sink.takeWhileMixin.js";
import Runnable_lift from "./Runnable.lift.js";
const Runnable_takeWhile = 
/*@__PURE__*/ (() => {
    const typedTakeWhileSinkMixin = Sink_takeWhileMixin();
    return pipe(createInstanceFactory(typedTakeWhileSinkMixin), StatefulContainer_takeWhile(Runnable_lift));
})();
export default Runnable_takeWhile;
