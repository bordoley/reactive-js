/// <reference types="./CollectorSinkMixin.d.ts" />

import { include, init, mix, props, proto, } from "../../__internal__/mixins.js";
import { none, pipe, returns } from "../../functions.js";
import { EventListenerLike_notify, } from "../../utils.js";
import * as DisposableContainer from "../DisposableContainer.js";
import DisposableMixin from "./DisposableMixin.js";
import DisposeOnCompleteSinkMixin from "./DisposeOnCompleteSinkMixin.js";
export const CollectorSinkMixin = 
/*@__PURE__*/ (() => {
    const CollectorSinkMixin_buffer = Symbol("CollectorSinkMixin_buffer");
    const CollectorSinkMixin_count = Symbol("CollectorSinkMixin_count");
    function onCollectorSinkMixinCompleted() {
        const buffer = this[CollectorSinkMixin_buffer];
        const count = this[CollectorSinkMixin_count];
        buffer.length = count;
    }
    return returns(mix(include(DisposableMixin, DisposeOnCompleteSinkMixin()), function CollectorSinkMixin(buffer) {
        init(DisposableMixin, this);
        init(DisposeOnCompleteSinkMixin(), this);
        this[CollectorSinkMixin_buffer] = buffer;
        buffer.length = 0;
        pipe(this, DisposableContainer.onComplete(onCollectorSinkMixinCompleted));
        return this;
    }, props({
        [CollectorSinkMixin_buffer]: none,
        [CollectorSinkMixin_count]: 0,
    }), proto({
        [EventListenerLike_notify](next) {
            const buffer = this[CollectorSinkMixin_buffer];
            const bufferLength = buffer.length;
            const index = this[CollectorSinkMixin_count];
            if (index === bufferLength) {
                buffer.length = index === 0 ? 32 : index << 1;
            }
            buffer[index] = next;
            this[CollectorSinkMixin_count]++;
        },
    })));
})();
