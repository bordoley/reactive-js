/// <reference types="./EventListener.toErrorSafeEventListener.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { DelegatingLike_delegate, } from "../../../__internal__/util.js";
import { error } from "../../../functions.js";
import { DisposableLike_dispose, EventListenerLike_isErrorSafe, EventListenerLike_notify, } from "../../../util.js";
import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_delegatingMixin from "../../Disposable/__internal__/Disposable.delegatingMixin.js";
const ErrorSafeEventListener_create = /*@__PURE__*/ (() => createInstanceFactory(mix(include(Disposable_delegatingMixin, Delegating_mixin()), function ErrorSafeEventListener(instance, delegate) {
    init(Disposable_delegatingMixin, instance, delegate);
    init(Delegating_mixin(), instance, delegate);
    return instance;
}, props({}), {
    [EventListenerLike_isErrorSafe]: true,
    [EventListenerLike_notify](ev) {
        try {
            this[DelegatingLike_delegate][EventListenerLike_notify](ev);
        }
        catch (e) {
            this[DisposableLike_dispose](error(e));
        }
    },
})))();
const EventListener_toErrorSafeEventListener = () => (eventListener) => eventListener[EventListenerLike_isErrorSafe]
    ? eventListener
    : ErrorSafeEventListener_create(eventListener);
export default EventListener_toErrorSafeEventListener;
