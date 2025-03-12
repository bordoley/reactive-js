/// <reference types="./Observable.fromStore.d.ts" />

import { include, init, mixInstanceFactory, props, } from "../../../__internal__/mixins.js";
import { ComputationLike_isDeferred, ComputationLike_isSynchronous, ObservableLike_observe, StoreLike_value, } from "../../../computations.js";
import { bindMethod, none, pipe, returns } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import DelegatingDisposableContainerMixin from "../../../utils/__mixins__/DelegatingDisposableContainerMixin.js";
import { DisposableLike_dispose, QueueableLike_complete, QueueableLike_enqueue, } from "../../../utils.js";
import * as EventSource from "../../EventSource.js";
const Observable_fromStore = /*@__PURE__*/ (() => {
    const FromStoreObservable_eventSource = Symbol("FromStoreObservable_eventSource");
    return returns(mixInstanceFactory(include(DelegatingDisposableContainerMixin), function FromEventSourceObservable(store) {
        this[FromStoreObservable_eventSource] = store;
        init(DelegatingDisposableContainerMixin, this, store);
        return this;
    }, props({
        [FromStoreObservable_eventSource]: none,
    }), {
        [ComputationLike_isDeferred]: false,
        [ComputationLike_isSynchronous]: false,
        [ObservableLike_observe](observer) {
            const store = this[FromStoreObservable_eventSource];
            observer[QueueableLike_enqueue](store[StoreLike_value]);
            pipe(this[FromStoreObservable_eventSource], DisposableContainer.onComplete(bindMethod(observer, QueueableLike_complete)), DisposableContainer.onError(bindMethod(observer, DisposableLike_dispose)), EventSource.addEventHandler(bindMethod(observer, QueueableLike_enqueue)), Disposable.addTo(observer));
        },
    }));
})();
export default Observable_fromStore;
