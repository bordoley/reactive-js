import * as Disposable from "../../../../Disposable.js";
import * as EventSource from "../../../../EventSource.js";
import { isNone, newInstance, pipe } from "../../../../functions.js";
import {
  EventPublisherLike,
  EventSourceLike_addEventListener,
  SinkLike_notify,
} from "../../../../types.js";
import type * as Element from "../../Element.js";

const Element_intersectionEventSource: Element.Signature["intersectionEventSource"] =
  /*@__PURE__*/ (() => {
    const intersectionObservers =
      newInstance<Map<Document | Element, IntersectionObserver>>(Map);

    const eventPublishers =
      newInstance<
        Map<
          Document | Element,
          Map<Element, EventPublisherLike<IntersectionObserverEntry>>
        >
      >(Map);

    return (root = document) =>
      child =>
        EventSource.create(listener => {
          const publisher =
            eventPublishers.get(root)?.get(child) ??
            (() => {
              const publisher =
                EventSource.createRefCountedPublisher<IntersectionObserverEntry>();

              const parentMap =
                eventPublishers.get(root) ??
                (() => {
                  const parentMap =
                    newInstance<
                      Map<
                        Element,
                        EventPublisherLike<IntersectionObserverEntry>
                      >
                    >(Map);
                  eventPublishers.set(root, parentMap);
                  return parentMap;
                })();
              parentMap.set(child, publisher);

              const intersectionObserver =
                intersectionObservers.get(root) ??
                (() => {
                  const cb = (entries: IntersectionObserverEntry[]) => {
                    for (const entry of entries) {
                      const { target } = entry;
                      const listener = eventPublishers.get(root)?.get(target);

                      if (isNone(listener)) {
                        continue;
                      }

                      listener[SinkLike_notify](entry);
                    }
                  };

                  const intersectionObserver = newInstance(
                    IntersectionObserver,
                    cb,
                    { root },
                  );
                  intersectionObservers.set(root, intersectionObserver);
                  return intersectionObserver;
                })();
              intersectionObserver.observe(child);

              return pipe(
                publisher,
                Disposable.onDisposed(() => {
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
                }),
              );
            })();

          publisher[EventSourceLike_addEventListener](listener);
        });
  })();

export default Element_intersectionEventSource;
