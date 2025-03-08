/// <reference types="./EventSource.merge.d.ts" />

import { Array_length } from "../../../__internal__/constants.js";
import { include, init, mixInstanceFactory, props, } from "../../../__internal__/mixins.js";
import { ComputationLike_isDeferred, ComputationLike_isSynchronous, EventListenerLike_notify, EventSourceLike_addEventListener, } from "../../../computations.js";
import { bindMethod, isSome, none, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import DelegatingDisposableContainerMixin from "../../../utils/__mixins__/DelegatingDisposableContainerMixin.js";
import { DisposableLike_dispose, } from "../../../utils.js";
import EventSource_addEventHandler from "./EventSource.addEventHandler.js";
const EventSource_merge = /*@__PURE__*/ (() => {
    const MergeEventSource_eventSources = Symbol("MergeEventSource_eventSources");
    const isMergeEventSource = (observable) => isSome(observable[MergeEventSource_eventSources]);
    const flattenEventSources = (observables) => observables.some(isMergeEventSource)
        ? observables.flatMap(observable => isMergeEventSource(observable)
            ? flattenEventSources(observable[MergeEventSource_eventSources])
            : observable)
        : observables;
    return mixInstanceFactory(include(DelegatingDisposableContainerMixin), function MergeEventSource(instance, ...eventSources) {
        eventSources = flattenEventSources(eventSources);
        instance[MergeEventSource_eventSources] = eventSources;
        const disposable = Disposable.create();
        init(DelegatingDisposableContainerMixin, instance, disposable);
        const count = eventSources[Array_length];
        let completed = 0;
        for (const eventSource of eventSources) {
            pipe(eventSource, DisposableContainer.onComplete(() => {
                completed++;
                if (completed >= count) {
                    disposable[DisposableLike_dispose]();
                }
            }));
        }
        return instance;
    }, props({
        [MergeEventSource_eventSources]: none,
    }), {
        [ComputationLike_isDeferred]: false,
        [ComputationLike_isSynchronous]: false,
        [EventSourceLike_addEventListener](listener) {
            const eventSources = this[MergeEventSource_eventSources];
            const count = eventSources[Array_length];
            let completed = 0;
            const eventHandler = bindMethod(listener, EventListenerLike_notify);
            for (const eventSource of eventSources) {
                pipe(eventSource, EventSource_addEventHandler(eventHandler), Disposable.addTo(listener), DisposableContainer.onComplete(() => {
                    completed++;
                    if (completed >= count) {
                        listener[DisposableLike_dispose]();
                    }
                }));
            }
        },
    });
})();
export default EventSource_merge;
