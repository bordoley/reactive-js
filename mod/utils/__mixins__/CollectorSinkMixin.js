/// <reference types="./CollectorSinkMixin.d.ts" />

import { include, init, mix, props, proto, } from "../../__internal__/mixins.js";
import { none, pipe, returns } from "../../functions.js";
import { EventListenerLike_notify, } from "../../utils.js";
import * as DisposableContainer from "../DisposableContainer.js";
import DisposableMixin from "./DisposableMixin.js";
import DisposeOnCompleteSinkMixin from "./DisposeOnCompleteSinkMixin.js";
export const CollectorSinkMixin = 
/*@__PURE__*/ (() => {
    const CollectObserver_buffer = Symbol("CollectObserver_buffer");
    const CollectObserver_count = Symbol("CollectObserver_count");
    function onCollectObserverCompleted() {
        const buffer = this[CollectObserver_buffer];
        const count = this[CollectObserver_count];
        buffer.length = count;
    }
    return returns(mix(include(DisposableMixin, DisposeOnCompleteSinkMixin()), function CollectorSinkMixin(buffer) {
        init(DisposableMixin, this);
        init(DisposeOnCompleteSinkMixin(), this);
        this[CollectObserver_buffer] = buffer;
        buffer.length = 0;
        pipe(this, DisposableContainer.onComplete(onCollectObserverCompleted));
        return this;
    }, props({
        [CollectObserver_buffer]: none,
        [CollectObserver_count]: 0,
    }), proto({
        [EventListenerLike_notify](next) {
            const buffer = this[CollectObserver_buffer];
            const bufferLength = buffer.length;
            const index = this[CollectObserver_count];
            if (index === bufferLength) {
                buffer.length = index === 0 ? 32 : index << 1;
            }
            buffer[index] = next;
            this[CollectObserver_count]++;
        },
    })));
})();
