/// <reference types="./EventSource.fromPromise.d.ts" />

import { include, init, mixInstanceFactory, props, } from "../../../__internal__/mixins.js";
import { ComputationLike_isDeferred, ComputationLike_isSynchronous, EventSourceLike_addEventListener, } from "../../../computations.js";
import { bindMethod, none, returns } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import DelegatingDisposableContainerMixin from "../../../utils/__mixins__/DelegatingDisposableContainerMixin.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, EventListenerLike_notify, } from "../../../utils.js";
const EventSource_fromPromise = 
/*@__PURE__*/ (() => {
    const FromPromiseEventSource_promise = Symbol("FromPromiseEventSource_promise");
    return returns(mixInstanceFactory(include(DelegatingDisposableContainerMixin), function FromPromiseEventSource(promise) {
        this[FromPromiseEventSource_promise] = promise;
        const disposable = Disposable.create();
        init(DelegatingDisposableContainerMixin, this, disposable);
        promise
            .catch(Disposable.toErrorHandler(disposable))
            .finally(bindMethod(disposable, DisposableLike_dispose));
        return this;
    }, props({
        [FromPromiseEventSource_promise]: none,
    }), {
        [ComputationLike_isDeferred]: false,
        [ComputationLike_isSynchronous]: false,
        [EventSourceLike_addEventListener](listener) {
            const promise = this[FromPromiseEventSource_promise];
            promise.then(next => {
                if (!listener[DisposableLike_isDisposed]) {
                    listener[EventListenerLike_notify](next);
                    listener[DisposableLike_dispose]();
                }
            }, Disposable.toErrorHandler(listener));
        },
    }));
})();
export default EventSource_fromPromise;
