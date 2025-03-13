/// <reference types="./Observable.map.d.ts" />

import { include, init, mixInstanceFactory, props, proto, } from "../../../__internal__/mixins.js";
import { none, partial, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import LiftedObserverMixin, { LiftedObserverLike_delegate, LiftedObserverLike_notify, } from "../../../utils/__mixins__/LiftedObserverMixin.js";
import { QueueableLike_enqueue } from "../../../utils.js";
import Observable_liftPure from "./Observable.liftPure.js";
const MapObserver_selector = Symbol("MapObserver_selector");
const createMapObserver = /*@__PURE__*/ (() => mixInstanceFactory(include(DelegatingDisposableMixin, LiftedObserverMixin()), function MapObserver(delegate, selector) {
    init(DelegatingDisposableMixin, this, delegate);
    init(LiftedObserverMixin(), this, delegate, none);
    pipe(this, Disposable.addTo(delegate));
    this[MapObserver_selector] = selector;
    return this;
}, props({
    [MapObserver_selector]: none,
}), proto({
    [LiftedObserverLike_notify](next) {
        const mapped = this[MapObserver_selector](next);
        const delegate = this[LiftedObserverLike_delegate];
        return (delegate?.[LiftedObserverLike_notify]?.(mapped) ??
            delegate[QueueableLike_enqueue](mapped));
    },
})))();
const Observable_map = (selector) => pipe((createMapObserver), partial(selector), Observable_liftPure);
export default Observable_map;
