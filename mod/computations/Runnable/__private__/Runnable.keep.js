/// <reference types="./Runnable.keep.d.ts" />

import { include, init, mixInstanceFactory, } from "../../../__internal__/mixins.js";
import { none, partial, pipe } from "../../../functions.js";
import KeepMixin from "../../../utils/__mixins__/EventListeners/KeepMixin.js";
import LiftedSinkMixin from "../../../utils/__mixins__/LiftedSinkMixin.js";
import Runnable_lift from "./Runnable.lift.js";
const Runnable_keep = /*@__PURE__*/ (() => {
    const createKeepSink = mixInstanceFactory(include(LiftedSinkMixin(), KeepMixin()), function KeepEventListener(delegate, predicate) {
        init(LiftedSinkMixin(), this, delegate, none);
        init(KeepMixin(), this, predicate);
        return this;
    });
    return (predicate) => pipe(createKeepSink, partial(predicate), Runnable_lift);
})();
export default Runnable_keep;
