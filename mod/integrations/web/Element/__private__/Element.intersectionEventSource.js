/// <reference types="./Element.intersectionEventSource.d.ts" />

import { EventListenerLike_notify, EventSourceLike_addEventListener, } from "../../../../events.js";
import * as EventSource from "../../../../events/EventSource.js";
import * as Publisher from "../../../../events/Publisher.js";
import { isNone, newInstance, pipe } from "../../../../functions.js";
import * as Disposable from "../../../../utils/Disposable.js";
const Element_intersectionEventSource = 
/*@__PURE__*/ (() => {
    const intersectionObservers = newInstance(Map);
    const eventPublishers = newInstance(Map);
    return (root = document) => child => EventSource.create(listener => {
        const publisher = eventPublishers.get(root)?.get(child) ??
            (() => {
                const publisher = Publisher.create({
                    autoDispose: true,
                });
                const parentMap = eventPublishers.get(root) ??
                    (() => {
                        const parentMap = newInstance(Map);
                        eventPublishers.set(root, parentMap);
                        return parentMap;
                    })();
                parentMap.set(child, publisher);
                const intersectionObserver = intersectionObservers.get(root) ??
                    (() => {
                        const cb = (entries) => {
                            for (const entry of entries) {
                                const { target } = entry;
                                const listener = eventPublishers.get(root)?.get(target);
                                if (isNone(listener)) {
                                    continue;
                                }
                                listener[EventListenerLike_notify](entry);
                            }
                        };
                        const intersectionObserver = newInstance(IntersectionObserver, cb, { root });
                        intersectionObservers.set(root, intersectionObserver);
                        return intersectionObserver;
                    })();
                intersectionObserver.observe(child);
                return pipe(publisher, Disposable.onDisposed(() => {
                    const intersectionObserver = intersectionObservers.get(root);
                    intersectionObserver?.unobserve(child);
                    const childToPublisherMap = eventPublishers.get(root);
                    childToPublisherMap?.delete(child);
                    if ((childToPublisherMap?.size ?? 0) > 0) {
                        return;
                    }
                    eventPublishers.delete(root);
                    intersectionObserver?.disconnect();
                    intersectionObservers.delete(root);
                }));
            })();
        publisher[EventSourceLike_addEventListener](listener);
    });
})();
export default Element_intersectionEventSource;
