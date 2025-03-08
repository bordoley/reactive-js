/// <reference types="./Observable.fromPromise.d.ts" />

import { include, init, mixInstanceFactory, props, } from "../../../__internal__/mixins.js";
import { ComputationLike_isDeferred, ComputationLike_isSynchronous, DispatcherLike_complete, ObservableLike_observe, } from "../../../computations.js";
import { bindMethod, none, returns } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import DelegatingDisposableContainerMixin from "../../../utils/__mixins__/DelegatingDisposableContainerMixin.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, QueueableLike_enqueue, } from "../../../utils.js";
const Observable_fromPromise = 
/*@__PURE__*/ (() => {
    const FromPromiseObservable_promise = Symbol("FromPromiseObservable_promise");
    return returns(mixInstanceFactory(include(DelegatingDisposableContainerMixin), function FromPromiseObservable(instance, promise) {
        instance[FromPromiseObservable_promise] = promise;
        const disposable = Disposable.create();
        init(DelegatingDisposableContainerMixin, instance, disposable);
        promise
            .catch(Disposable.toErrorHandler(disposable))
            .finally(bindMethod(disposable, DisposableLike_dispose));
        return instance;
    }, props({
        [FromPromiseObservable_promise]: none,
    }), {
        [ComputationLike_isDeferred]: false,
        [ComputationLike_isSynchronous]: false,
        [ObservableLike_observe](observer) {
            this[FromPromiseObservable_promise].then(next => {
                if (!observer[DisposableLike_isDisposed]) {
                    observer[QueueableLike_enqueue](next);
                    observer[DispatcherLike_complete]();
                }
            }, Disposable.toErrorHandler(observer));
        },
    }));
})();
export default Observable_fromPromise;
