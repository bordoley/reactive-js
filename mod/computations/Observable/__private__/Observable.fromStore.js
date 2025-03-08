/// <reference types="./Observable.fromStore.d.ts" />

import { mixInstanceFactory, props } from "../../../__internal__/mixins.js";
import { ComputationLike_isDeferred, ComputationLike_isSynchronous, DispatcherLike_complete, ObservableLike_observe, StoreLike_value, } from "../../../computations.js";
import { bindMethod, none, pipe, returns } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import { DisposableLike_dispose, QueueableLike_enqueue, } from "../../../utils.js";
import * as EventSource from "../../EventSource.js";
const Observable_fromStore = /*@__PURE__*/ (() => {
    const FromStoreObservable_eventSource = Symbol("FromStoreObservable_eventSource");
    return returns(mixInstanceFactory(function FromEventSourceObservable(instance, store) {
        instance[FromStoreObservable_eventSource] = store;
        return instance;
    }, props({
        [FromStoreObservable_eventSource]: none,
    }), {
        [ComputationLike_isDeferred]: false,
        [ComputationLike_isSynchronous]: false,
        [ObservableLike_observe](observer) {
            const store = this[FromStoreObservable_eventSource];
            observer[QueueableLike_enqueue](store[StoreLike_value]);
            pipe(this[FromStoreObservable_eventSource], DisposableContainer.onComplete(bindMethod(observer, DispatcherLike_complete)), DisposableContainer.onError(bindMethod(observer, DisposableLike_dispose)), EventSource.addEventHandler(bindMethod(observer, QueueableLike_enqueue)), Disposable.addTo(observer));
        },
    }));
})();
export default Observable_fromStore;
