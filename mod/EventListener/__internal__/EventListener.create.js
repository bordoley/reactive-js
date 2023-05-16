/// <reference types="./EventListener.create.d.ts" />

import Disposable_mixin from "../../Disposable/__internal__/Disposable.mixin.js";
import { createInstanceFactory, include, init, mix, props, } from "../../__internal__/mixins.js";
import { call, error, none } from "../../functions.js";
import { DisposableLike_dispose, EventListenerLike_isErrorSafe, SinkLike_notify, } from "../../types.js";
const EventListener_createInternal = /*@__PURE__*/ (() => {
    return createInstanceFactory(mix(include(Disposable_mixin), function EventListener(instance, notify, isErrorSafe) {
        init(Disposable_mixin, instance);
        instance[SinkLike_notify] = isErrorSafe
            ? function (ev) {
                try {
                    call(notify, this, ev);
                }
                catch (e) {
                    instance[DisposableLike_dispose](error(e));
                }
            }
            : notify;
        instance[EventListenerLike_isErrorSafe] = isErrorSafe;
        return instance;
    }, props({
        [SinkLike_notify]: none,
        [EventListenerLike_isErrorSafe]: false,
    }), {}));
})();
const EventListener_create = ((notify, options) => EventListener_createInternal(notify, options?.errorSafe ?? false));
export default EventListener_create;
