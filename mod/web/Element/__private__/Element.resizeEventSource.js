/// <reference types="./Element.resizeEventSource.d.ts" />

import { Map, Map_delete, Map_get, Map_set, Map_size, } from "../../../__internal__/constants.js";
import * as Publisher from "../../../computations/Publisher.js";
import { isNone, newInstance, none, pipe, } from "../../../functions.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import { EventListenerLike_notify } from "../../../utils.js";
const Element_resizeEventSource = 
/*@__PURE__*/ (() => {
    const publishers = newInstance(Map);
    let resizeObserver = none;
    const resizeObserverCallback = (entries) => {
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
        return (publishers[Map_get](element) ??
            (() => {
                const publisher = pipe(Publisher.create({
                    autoDispose: true,
                }), DisposableContainer.onDisposed(() => {
                    resizeObserver?.unobserve(element);
                    publishers[Map_delete](element);
                    if (publishers[Map_size] > 0) {
                        return;
                    }
                    resizeObserver?.disconnect();
                    resizeObserver = none;
                }));
                publishers[Map_set](element, publisher);
                resizeObserver.observe(element, options);
                return publisher;
            })());
    };
})();
export default Element_resizeEventSource;
