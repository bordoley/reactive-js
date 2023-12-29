/// <reference types="./Streamable.create.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { ObservableLike_isDeferred, ObservableLike_isPure, ObservableLike_isRunnable, ObservableLike_observe, StreamableLike_stream, } from "../../../concurrent.js";
import { isSome, none, pipe, raiseIf, } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import Observable_multicast from "../../Observable/__private__/Observable.multicast.js";
import DelegatingDispatcherMixin from "../../__mixins__/DelegatingDispatcherMixin.js";
import DelegatingReplayObservableMixin from "../../__mixins__/DelegatingReplayObservableMixin.js";
const Stream_create = /*@__PURE__*/ (() => {
    const DispatchedObservableLike_dispatcher = Symbol("DispatchedObservableLike_dispatcher");
    const DispatchedObservable_create = (() => {
        return createInstanceFactory(mix(function DispatchedObservable(instance) {
            return instance;
        }, props({
            [DispatchedObservableLike_dispatcher]: none,
        }), {
            [ObservableLike_isDeferred]: true,
            [ObservableLike_isPure]: false,
            [ObservableLike_isRunnable]: false,
            [ObservableLike_observe](observer) {
                raiseIf(isSome(this[DispatchedObservableLike_dispatcher]), "DispatchedObservable already subscribed to");
                this[DispatchedObservableLike_dispatcher] = observer;
            },
        }));
    })();
    return createInstanceFactory(mix(include(DelegatingDispatcherMixin(), DelegatingReplayObservableMixin()), function StreamMixin(instance, op, scheduler, multicastOptions) {
        const dispatchedObservable = DispatchedObservable_create();
        const delegate = pipe(dispatchedObservable, op, Observable_multicast(scheduler, multicastOptions));
        init(DelegatingDispatcherMixin(), instance, dispatchedObservable[DispatchedObservableLike_dispatcher]);
        init(DelegatingReplayObservableMixin(), instance, delegate);
        pipe(delegate, Disposable.addTo(instance));
        return instance;
    }));
})();
const Streamable_create = (op) => ({
    [StreamableLike_stream]: (scheduler, options) => Stream_create(op, scheduler, options),
});
export default Streamable_create;
