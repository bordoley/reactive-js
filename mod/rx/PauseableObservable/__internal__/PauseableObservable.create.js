/// <reference types="./PauseableObservable.create.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import Optional_toObservable from "../../../containers/Optional/__internal__/Optional.toObservable.js";
import { bindMethod, compose, none, pipe, unsafeCast, } from "../../../functions.js";
import { PauseableObservableLike_isPaused, } from "../../../rx.js";
import Stream_mixin from "../../../streaming/Stream/__internal__/Stream.mixin.js";
import { EventListenerLike_notify, KeyedCollectionLike_get, PauseableLike_isPaused, PauseableLike_pause, PauseableLike_resume, QueueableLike_enqueue, ReplayableLike_buffer, } from "../../../util.js";
import Disposable_add from "../../../util/Disposable/__internal__/Disposable.add.js";
import Observable_backpressureStrategy from "../../Observable/__internal__/Observable.backpressureStrategy.js";
import Observable_distinctUntilChanged from "../../Observable/__internal__/Observable.distinctUntilChanged.js";
import Observable_forEach from "../../Observable/__internal__/Observable.forEach.js";
import Observable_mergeWith from "../../Observable/__internal__/Observable.mergeWith.js";
import Publisher_create from "../../Publisher/__internal__/Publisher.create.js";
const PauseableObservable_create = /*@__PURE__*/ (() => {
    return createInstanceFactory(mix(include(Stream_mixin()), function PauseableObservable(instance, op, scheduler, multicastOptions) {
        const publisher = Publisher_create({ replay: 1 });
        const liftedOp = compose(Observable_backpressureStrategy(1, "drop-oldest"), Observable_mergeWith(
        // Initialize to paused state
        pipe(true, Optional_toObservable())), Observable_distinctUntilChanged(), Observable_forEach(bindMethod(publisher, EventListenerLike_notify)), op);
        init(Stream_mixin(), instance, liftedOp, scheduler, multicastOptions);
        pipe(instance, Disposable_add(publisher));
        instance[PauseableObservableLike_isPaused] = publisher;
        return instance;
    }, props({
        [PauseableObservableLike_isPaused]: none,
    }), {
        get [PauseableLike_isPaused]() {
            unsafeCast(this);
            return (this[PauseableObservableLike_isPaused][ReplayableLike_buffer][KeyedCollectionLike_get](0) ?? true);
        },
        [PauseableLike_pause]() {
            this[QueueableLike_enqueue](true);
        },
        [PauseableLike_resume]() {
            this[QueueableLike_enqueue](false);
        },
    }));
})();
export default PauseableObservable_create;
