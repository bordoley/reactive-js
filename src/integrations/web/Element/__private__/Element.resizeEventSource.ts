import {
  Map,
  Map_delete,
  Map_get,
  Map_set,
  Map_size,
} from "../../../../__internal__/constants.js";
import * as Publisher from "../../../../computations/Publisher.js";
import {
  EventListenerLike_notify,
  PublisherLike,
} from "../../../../computations.js";
import {
  Optional,
  isNone,
  newInstance,
  none,
  pipe,
} from "../../../../functions.js";
import * as DisposableContainer from "../../../../utils/DisposableContainer.js";
import type * as Element from "../../Element.js";

const Element_resizeEventSource: Element.Signature["resizeEventSource"] =
  /*@__PURE__*/ (() => {
    const publishers =
      newInstance<Map<Element, PublisherLike<ResizeObserverEntry>>>(Map);
    let resizeObserver: Optional<ResizeObserver> = none;

    const resizeObserverCallback = (entries: ResizeObserverEntry[]) => {
      for (const entry of entries) {
        const publisher = publishers[Map_get](entry.target);

        if (isNone(publisher)) {
          continue;
        }

        publisher[EventListenerLike_notify](entry);
      }
    };

    return options => element => {
      resizeObserver =
        resizeObserver ??
        (() => newInstance(ResizeObserver, resizeObserverCallback))();

      return (
        publishers[Map_get](element) ??
        (() => {
          const publisher = pipe(
            Publisher.create<ResizeObserverEntry>({
              autoDispose: true,
            }),
            DisposableContainer.onDisposed(() => {
              resizeObserver?.unobserve(element);
              publishers[Map_delete](element);

              if (publishers[Map_size] > 0) {
                return;
              }

              resizeObserver?.disconnect();
              resizeObserver = none;
            }),
          );

          publishers[Map_set](element, publisher);
          resizeObserver.observe(element, options);

          return publisher;
        })()
      );
    };
  })();

export default Element_resizeEventSource;
