/// <reference types="./EventSource.takeUntil.d.ts" />

import { include, init, mixInstanceFactory, props, } from "../../../__internal__/mixins.js";
import { ignore, none, partial, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import { EventListenerLike_notify } from "../../../utils.js";
import EventSource_addEventHandler from "./EventSource.addEventHandler.js";
import EventSource_lift from "./EventSource.lift.js";
const createTakeUntilEventListener = /*@__PURE__*/ (() => {
    const TakeUntilEventListener_delegate = Symbol("TakeUntilEventListener_delegate");
    return mixInstanceFactory(include(DelegatingDisposableMixin), function WithLatestFromEventListener(delegate, notifier) {
        init(DelegatingDisposableMixin, this, delegate);
        this[TakeUntilEventListener_delegate] = delegate;
        pipe(notifier, EventSource_addEventHandler(ignore), Disposable.bindTo(this));
        return this;
    }, props({
        [TakeUntilEventListener_delegate]: none,
    }), {
        [EventListenerLike_notify](next) {
            this[TakeUntilEventListener_delegate][EventListenerLike_notify](next);
        },
    });
})();
const EventSource_takeUntil = ((notifier) => pipe((createTakeUntilEventListener), partial(notifier), EventSource_lift));
export default EventSource_takeUntil;
