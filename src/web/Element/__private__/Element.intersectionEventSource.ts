import {
  Map,
  Map_delete,
  Map_get,
  Map_set,
  Map_size,
} from "../../../__internal__/constants.js";
import * as EventSource from "../../../computations/EventSource.js";
import * as Publisher from "../../../computations/Publisher.js";
import {
  EventSourceLike_addEventListener,
  PublisherLike,
} from "../../../computations.js";
import { isNone, newInstance, pipe } from "../../../functions.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import { EventListenerLike_notify } from "../../../utils.js";
import type * as Element from "../../Element.js";

const Element_intersectionEventSource: Element.Signature["intersectionEventSource"] =
  /*@__PURE__*/ (() => {
    const intersectionObservers =
      newInstance<Map<Document | Element, IntersectionObserver>>(Map);

    const eventPublishers =
      newInstance<
        Map<
          Document | Element,
          Map<Element, PublisherLike<IntersectionObserverEntry>>
        >
      >(Map);

    return (root = document) =>
      child =>
        EventSource.create(listener => {
          const publisher =
            eventPublishers[Map_get](root)?.[Map_get](child) ??
            (() => {
              const publisher = Publisher.create<IntersectionObserverEntry>({
                autoDispose: true,
              });

              const parentMap =
                eventPublishers[Map_get](root) ??
                (() => {
                  const parentMap =
                    newInstance<
                      Map<Element, PublisherLike<IntersectionObserverEntry>>
                    >(Map);
                  eventPublishers[Map_set](root, parentMap);
                  return parentMap;
                })();
              parentMap[Map_set](child, publisher);

              const intersectionObserver =
                intersectionObservers[Map_get](root) ??
                (() => {
                  const cb = (entries: IntersectionObserverEntry[]) => {
                    for (const entry of entries) {
                      const { target } = entry;
                      const listener =
                        eventPublishers[Map_get](root)?.[Map_get](target);

                      if (isNone(listener)) {
                        continue;
                      }

                      listener[EventListenerLike_notify](entry);
                    }
                  };

                  const intersectionObserver = newInstance(
                    IntersectionObserver,
                    cb,
                    { root },
                  );
                  intersectionObservers[Map_set](root, intersectionObserver);
                  return intersectionObserver;
                })();
              intersectionObserver.observe(child);

              return pipe(
                publisher,
                DisposableContainer.onDisposed(() => {
                  const intersectionObserver =
                    intersectionObservers[Map_get](root);
                  intersectionObserver?.unobserve(child);

                  const childToPublisherMap = eventPublishers[Map_get](root);
                  childToPublisherMap?.[Map_delete](child);

                  if ((childToPublisherMap?.[Map_size] ?? 0) > 0) {
                    return;
                  }

                  eventPublishers[Map_delete](root);
                  intersectionObserver?.disconnect();
                  intersectionObservers[Map_delete](root);
                }),
              );
            })();

          publisher[EventSourceLike_addEventListener](listener);
        });
  })();

export default Element_intersectionEventSource;
