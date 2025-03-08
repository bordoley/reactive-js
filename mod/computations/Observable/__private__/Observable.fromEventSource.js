/// <reference types="./Observable.fromEventSource.d.ts" />

import { include, init, mixInstanceFactory, props, } from "../../../__internal__/mixins.js";
import { ComputationLike_isDeferred, ComputationLike_isSynchronous, DispatcherLike_complete, ObservableLike_observe, } from "../../../computations.js";
import { bindMethod, none, pipe, returns } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import DelegatingDisposableContainerMixin from "../../../utils/__mixins__/DelegatingDisposableContainerMixin.js";
import { DisposableLike_dispose, QueueableLike_enqueue, } from "../../../utils.js";
import * as EventSource from "../../EventSource.js";
const Observable_fromEventSource = 
/*@__PURE__*/ (() => {
    const FromEventSourceObservable_eventSource = Symbol("FromEventSourceObservable_eventSource");
    return returns(mixInstanceFactory(include(DelegatingDisposableContainerMixin), function FromEventSourceObservable(instance, eventSource) {
        instance[FromEventSourceObservable_eventSource] = eventSource;
        init(DelegatingDisposableContainerMixin, instance, eventSource);
        return instance;
    }, props({
        [FromEventSourceObservable_eventSource]: none,
    }), {
        [ComputationLike_isDeferred]: false,
        [ComputationLike_isSynchronous]: false,
        [ObservableLike_observe](observer) {
            pipe(this[FromEventSourceObservable_eventSource], DisposableContainer.onComplete(bindMethod(observer, DispatcherLike_complete)), DisposableContainer.onError(bindMethod(observer, DisposableLike_dispose)), EventSource.addEventHandler(bindMethod(observer, QueueableLike_enqueue)), Disposable.addTo(observer));
        },
    }));
})();
export default Observable_fromEventSource;
