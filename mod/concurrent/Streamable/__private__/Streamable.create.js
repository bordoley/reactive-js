/// <reference types="./Streamable.create.d.ts" />

import { include, init, mixInstanceFactory, props, } from "../../../__internal__/mixins.js";
import { ObservableLike_isDeferred, ObservableLike_isMulticasted, ObservableLike_isPure, ObservableLike_isRunnable, ObservableLike_observe, StreamableLike_stream, } from "../../../concurrent.js";
import { isSome, none, pipe, raiseIf, } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as Observable from "../../Observable.js";
import DelegatingDispatcherMixin from "../../__mixins__/DelegatingDispatcherMixin.js";
import DelegatingMulticastObservableMixin from "../../__mixins__/DelegatingMulticastObservableMixin.js";
const Stream_create = /*@__PURE__*/ (() => {
    const DispatchedObservableLike_dispatcher = Symbol("DispatchedObservableLike_dispatcher");
    const DispatchedObservable_create = (() => {
        return mixInstanceFactory(function DispatchedObservable(instance) {
            return instance;
        }, props({
            [DispatchedObservableLike_dispatcher]: none,
        }), {
            [ObservableLike_isDeferred]: true,
            [ObservableLike_isMulticasted]: false,
            [ObservableLike_isPure]: true,
            [ObservableLike_isRunnable]: false,
            [ObservableLike_observe](observer) {
                raiseIf(isSome(this[DispatchedObservableLike_dispatcher]), "DispatchedObservable already subscribed to");
                this[DispatchedObservableLike_dispatcher] = observer;
            },
        });
    })();
    return mixInstanceFactory(include(DelegatingDispatcherMixin(), DelegatingMulticastObservableMixin()), function StreamMixin(instance, op, scheduler, multicastOptions) {
        const dispatchedObservable = DispatchedObservable_create();
        const delegate = pipe(dispatchedObservable, op, Observable.multicast(scheduler, multicastOptions));
        init(DelegatingDispatcherMixin(), instance, dispatchedObservable[DispatchedObservableLike_dispatcher]);
        init(DelegatingMulticastObservableMixin(), instance, delegate);
        pipe(delegate, Disposable.addTo(instance));
        return instance;
    });
})();
const Streamable_create = (op) => ({
    [StreamableLike_stream]: (scheduler, options) => Stream_create(op, scheduler, options),
});
export default Streamable_create;
