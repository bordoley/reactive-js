/// <reference types="./InteractiveObservable.create.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { compose, none } from "../../../functions.js";
import { InteractiveObservableLike_move, } from "../../../rx.js";
import Stream_mixin from "../../../streaming/Stream/__internal__/Stream.mixin.js";
import { QueueableLike_enqueue, } from "../../../util.js";
import Observable_backpressureStrategy from "../../Observable/__internal__/Observable.backpressureStrategy.js";
const InteractiveObservable_create = /*@__PURE__*/ (() => {
    return createInstanceFactory(mix(include(Stream_mixin()), function InteractiveObservable(instance, op, scheduler, multicastOptions) {
        const liftedOp = compose(Observable_backpressureStrategy(1, "drop-oldest"), op);
        init(Stream_mixin(), instance, liftedOp, scheduler, multicastOptions);
        return instance;
    }, props({}), {
        [InteractiveObservableLike_move]() {
            this[QueueableLike_enqueue](none);
        },
    }));
})();
export default InteractiveObservable_create;
