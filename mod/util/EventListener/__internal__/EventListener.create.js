/// <reference types="./EventListener.create.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { none } from "../../../functions.js";
import { EventListenerLike_notify } from "../../../util.js";
import Disposable_mixin from "../../Disposable/__internal__/Disposable.mixin.js";
const EventListener_create = /*@__PURE__*/ (() => {
    return createInstanceFactory(mix(include(Disposable_mixin), function ObserverMixin(instance, notify) {
        init(Disposable_mixin, instance);
        instance[EventListenerLike_notify] = notify;
        return instance;
    }, props({
        [EventListenerLike_notify]: none,
    }), {}));
})();
export default EventListener_create;
