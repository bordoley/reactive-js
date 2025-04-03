/// <reference types="./Observable.debounce.d.ts" />

import { include, init, mixInstanceFactory, props, proto, } from "../../../__internal__/mixins.js";
import { none, partial, pipe, returns } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import * as SerialDisposable from "../../../utils/SerialDisposable.js";
import { DelegatingEventListenerLike_delegate } from "../../../utils/__mixins__/DelegatingEventListenerMixin.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, EventListenerLike_notify, SinkLike_complete, SinkLike_isCompleted, } from "../../../utils.js";
import * as Computation from "../../Computation.js";
import * as EventSource from "../../EventSource.js";
import Observable_delay from "../../Observable/__private__/Observable.delay.js";
import { LiftedSinkLike_subscription, } from "../../__internal__/LiftedSource.js";
import DelegatingLiftedSinkMixin, { DelegatingLiftedSinkLike_onCompleted, } from "../../__mixins__/DelegatingLiftedSinkMixin.js";
import Observable_concat from "./Observable.concat.js";
import Observable_forEach from "./Observable.forEach.js";
import { Observable_genPure } from "./Observable.gen.js";
import Observable_lift from "./Observable.lift.js";
import Observable_takeFirst from "./Observable.takeFirst.js";
const m = Computation.makeModule({
    concat: Observable_concat,
    genPure: Observable_genPure,
});
const createDebounceSink = /*@__PURE__*/ (() => {
    const DebounceSink_durationSubscription = Symbol("DebounceSink_durationSubscription");
    const DebounceSink_durationFunction = Symbol("DebounceSink_durationFunction");
    return mixInstanceFactory(include(DelegatingLiftedSinkMixin()), function ThrowIfEmptySink(delegate, durationFunction) {
        init(DelegatingLiftedSinkMixin(), this, delegate);
        this[DebounceSink_durationFunction] = durationFunction;
        this[DebounceSink_durationSubscription] = pipe(SerialDisposable.create(), Disposable.addTo(delegate));
        return this;
    }, props({
        [DebounceSink_durationSubscription]: none,
        [DebounceSink_durationFunction]: none,
    }), proto({
        [EventListenerLike_notify](next) {
            const delegate = this[DelegatingEventListenerLike_delegate];
            const scheduler = this[LiftedSinkLike_subscription];
            const debounceSubscription = this[DebounceSink_durationSubscription];
            debounceSubscription[DisposableLike_dispose]();
            this[DebounceSink_durationSubscription] = pipe(this[DebounceSink_durationFunction](next), Computation.endWith(m, none), Observable_takeFirst(), Observable_forEach(() => {
                // Note that if the downstream consumer applies backpressure
                // this should still mostly work in theory because the
                // upstream producer should slow down producing values
                // in that case.
                this[DelegatingEventListenerLike_delegate][EventListenerLike_notify](next);
            }), EventSource.subscribe({ scheduler }), DisposableContainer.onComplete(() => {
                if (this[SinkLike_isCompleted]) {
                    delegate[SinkLike_complete]();
                }
            }), Disposable.addTo(this));
        },
        [DelegatingLiftedSinkLike_onCompleted]() {
            const delegate = this[DelegatingEventListenerLike_delegate];
            const debounceSubscription = this[DebounceSink_durationSubscription];
            if (debounceSubscription[DisposableLike_isDisposed]) {
                delegate[SinkLike_complete]();
            }
        },
    }));
})();
const Observable_debounce = ((duration) => {
    const durationObservable = returns(Observable_delay(duration));
    return pipe((createDebounceSink), partial(durationObservable), Observable_lift());
});
export default Observable_debounce;
