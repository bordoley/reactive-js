/// <reference types="./Runnable.pairwise.d.ts" />

import { createInstanceFactory } from "../../../__internal__/mixins.js";
import { pipe, returns } from "../../../functions.js";
import Sink_pairwiseMixin from "../../Sink/__internal__/Sink.pairwiseMixin.js";
import Runnable_lift from "./Runnable.lift.js";
const Runnable_pairwise = /*@__PURE__*/ (() => {
    const typedPairwiseSinkMixin = Sink_pairwiseMixin();
    return pipe(createInstanceFactory(typedPairwiseSinkMixin), Runnable_lift, returns);
})();
export default Runnable_pairwise;
