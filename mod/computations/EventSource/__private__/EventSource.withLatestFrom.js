/// <reference types="./EventSource.withLatestFrom.d.ts" />

import { include, init, mixInstanceFactory, props, } from "../../../__internal__/mixins.js";
import { bind, none, partial, pipe, tuple, } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, EventListenerLike_notify, } from "../../../utils.js";
import EventSource_addEventHandler from "./EventSource.addEventHandler.js";
import EventSource_lift from "./EventSource.lift.js";
const createWithLatestFromEventListener = /*@__PURE__*/ (() => {
    const WithLatestFromEventListener_hasLatest = Symbol("WithLatestFromEventListener_hasLatest");
    const WithLatestFromEventListener_otherLatest = Symbol("WithLatestFromEventListener_otherLatest");
    const WithLatestFromEventListener_selector = Symbol("WithLatestFromEventListener_selector");
    const WithLatestFromEventListener_delegate = Symbol("WithLatestFromEventListener_delegate");
    function onWithLatestFromEventListenerOtherSubscriptionComplete() {
        if (!this[WithLatestFromEventListener_hasLatest]) {
            this[DisposableLike_dispose]();
        }
    }
    function onOtherNotify(next) {
        this[WithLatestFromEventListener_hasLatest] = true;
        this[WithLatestFromEventListener_otherLatest] = next;
    }
    return mixInstanceFactory(include(DelegatingDisposableMixin), function WithLatestFromEventListener(instance, delegate, other, selector) {
        init(DelegatingDisposableMixin, instance, delegate);
        instance[WithLatestFromEventListener_selector] = selector;
        instance[WithLatestFromEventListener_delegate] = delegate;
        pipe(other, EventSource_addEventHandler(bind(onOtherNotify, instance)), Disposable.addTo(instance), DisposableContainer.onComplete(bind(onWithLatestFromEventListenerOtherSubscriptionComplete, instance)));
        return instance;
    }, props({
        [WithLatestFromEventListener_hasLatest]: false,
        [WithLatestFromEventListener_otherLatest]: none,
        [WithLatestFromEventListener_selector]: none,
        [WithLatestFromEventListener_delegate]: none,
    }), {
        [EventListenerLike_notify](next) {
            if (!this[DisposableLike_isDisposed] &&
                this[WithLatestFromEventListener_hasLatest]) {
                const result = this[WithLatestFromEventListener_selector](next, this[WithLatestFromEventListener_otherLatest]);
                this[WithLatestFromEventListener_delegate][EventListenerLike_notify](result);
            }
        },
    });
})();
const EventSource_withLatestFrom = ((other, selector = tuple) => pipe(createWithLatestFromEventListener, partial(other, selector), EventSource_lift));
export default EventSource_withLatestFrom;
