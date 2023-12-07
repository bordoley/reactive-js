import { PublisherLike } from "../../../../events.js";
import * as Publisher from "../../../../events/Publisher.js";
import {
  Optional,
  isNone,
  newInstance,
  none,
  pipe,
} from "../../../../functions.js";
import { SinkLike_notify } from "../../../../utils.js";
import * as Disposable from "../../../../utils/Disposable.js";
import type * as Element from "../../Element.js";

const Element_resizeEventSource: Element.Signature["resizeEventSource"] =
  /*@__PURE__*/ (() => {
    const publishers =
      newInstance<Map<Element, PublisherLike<ResizeObserverEntry>>>(Map);
    let resizeObserver: Optional<ResizeObserver> = none;

    const resizeObserverCallback = (entries: ResizeObserverEntry[]) => {
      for (const entry of entries) {
        const publisher = publishers.get(entry.target);

        if (isNone(publisher)) {
          continue;
        }

        publisher[SinkLike_notify](entry);
      }
    };

    return options => element => {
      resizeObserver =
        resizeObserver ??
        (() => newInstance(ResizeObserver, resizeObserverCallback))();

      const publisher =
        publishers.get(element) ??
        (() => {
          const publisher = pipe(
            Publisher.createRefCounted<ResizeObserverEntry>(),
            Disposable.onDisposed(() => {
              resizeObserver?.unobserve(element);
              publishers.delete(element);

              if (publishers.size > 0) {
                return;
              }

              resizeObserver?.disconnect();
              resizeObserver = none;
            }),
          );

          publishers.set(element, publisher);
          resizeObserver.observe(element, options);

          return publisher;
        })();

      return publisher;
    };
  })();

export default Element_resizeEventSource;
