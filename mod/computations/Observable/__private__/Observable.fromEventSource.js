/// <reference types="./Observable.fromEventSource.d.ts" />

import { include, init, mixInstanceFactory, props, } from "../../../__internal__/mixins.js";
import { ComputationLike_isDeferred, ComputationLike_isSynchronous, ObservableLike_observe, } from "../../../computations.js";
import { bindMethod, none, pipe, returns } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import DelegatingDisposableContainerMixin from "../../../utils/__mixins__/DelegatingDisposableContainerMixin.js";
import { DisposableLike_dispose, EventListenerLike_notify, SinkLike_complete, } from "../../../utils.js";
import EventSource_addEventHandler from "../../EventSource/__private__/EventSource.addEventHandler.js";
const Observable_fromEventSource = 
/*@__PURE__*/ (() => {
    const FromEventSourceObservable_eventSource = Symbol("FromEventSourceObservable_eventSource");
    return returns(mixInstanceFactory(include(DelegatingDisposableContainerMixin), function FromEventSourceObservable(eventSource) {
        this[FromEventSourceObservable_eventSource] = eventSource;
        init(DelegatingDisposableContainerMixin, this, eventSource);
        return this;
    }, props({
        [FromEventSourceObservable_eventSource]: none,
    }), {
        [ComputationLike_isDeferred]: false,
        [ComputationLike_isSynchronous]: false,
        [ObservableLike_observe](observer) {
            pipe(this[FromEventSourceObservable_eventSource], DisposableContainer.onComplete(bindMethod(observer, SinkLike_complete)), DisposableContainer.onError(bindMethod(observer, DisposableLike_dispose)), EventSource_addEventHandler(bindMethod(observer, EventListenerLike_notify)), Disposable.addTo(observer));
        },
    }));
})();
export default Observable_fromEventSource;
