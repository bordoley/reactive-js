/// <reference types="./Runnable.forEach.d.ts" />

import { createInstanceFactory } from "../../../__internal__/mixins.js";
import StatefulContainer_forEach from "../../../containers/StatefulContainer/__internal__/StatefulContainer.forEach.js";
import { pipe } from "../../../functions.js";
import Sink_forEachMixin from "../../Sink/__internal__/Sink.forEachMixin.js";
import Runnable_liftT from "./Runnable.liftT.js";
const Runnable_forEach = /*@__PURE__*/ (() => {
    const typedForEachSinkMixin = Sink_forEachMixin();
    return pipe(createInstanceFactory(typedForEachSinkMixin), StatefulContainer_forEach(Runnable_liftT));
})();
export default Runnable_forEach;
