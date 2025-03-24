/// <reference types="./EventListener.d.ts" />

import { include, init, mixInstanceFactory, props, } from "../../__internal__/mixins.js";
import { none } from "../../functions.js";
import { EventListenerLike_notify, } from "../../utils.js";
import DisposableMixin from "../__mixins__/DisposableMixin.js";
export const create = /*@__PURE__*/ (() => {
    return mixInstanceFactory(include(DisposableMixin), function EventListener(notify) {
        init(DisposableMixin, this);
        this[EventListenerLike_notify] = notify;
        return this;
    }, props({
        [EventListenerLike_notify]: none,
    }));
})();
