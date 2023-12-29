/// <reference types="./Element.resizeEventSource.d.ts" />

import { SinkLike_notify } from "../../../../events.js";
import * as Publisher from "../../../../events/Publisher.js";
import { isNone, newInstance, none, pipe, } from "../../../../functions.js";
import * as Disposable from "../../../../utils/Disposable.js";
const Element_resizeEventSource = 
/*@__PURE__*/ (() => {
    const publishers = newInstance(Map);
    let resizeObserver = none;
    const resizeObserverCallback = (entries) => {
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
        return (publishers.get(element) ??
            (() => {
                const publisher = pipe(Publisher.create({
                    autoDispose: true,
                }), Disposable.onDisposed(() => {
                    resizeObserver?.unobserve(element);
                    publishers.delete(element);
                    if (publishers.size > 0) {
                        return;
                    }
                    resizeObserver?.disconnect();
                    resizeObserver = none;
                }));
                publishers.set(element, publisher);
                resizeObserver.observe(element, options);
                return publisher;
            })());
    };
})();
export default Element_resizeEventSource;
