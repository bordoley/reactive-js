/// <reference types="./Sink.bufferMixin.d.ts" />

import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_mixin from "../../Disposable/__internal__/Disposable.mixin.js";
import Disposable_onComplete from "../../Disposable/__internal__/Disposable.onComplete.js";
import ReadonlyArray_isEmpty from "../../ReadonlyArray/__internal__/ReadonlyArray.isEmpty.js";
import { include, init, mix, props, } from "../../__internal__/mixins.js";
import { BufferingLike_buffer, BufferingLike_count, DelegatingLike_delegate, } from "../../__internal__/types.js";
import { none, pipe, returns } from "../../functions.js";
import { DisposableLike_dispose, SinkLike_notify, } from "../../types.js";
const Sink_bufferMixin = /*@__PURE__*/ (() => returns(mix(include(Disposable_mixin, Delegating_mixin()), function ForEachSinkMixin(instance, delegate, count, onComplete) {
    init(Delegating_mixin(), instance, delegate);
    init(Disposable_mixin, instance, delegate);
    instance[BufferingLike_count] = count;
    instance[BufferingLike_buffer] = [];
    pipe(instance, Disposable_onComplete(() => {
        const { [BufferingLike_buffer]: buffer } = instance;
        instance[BufferingLike_buffer] = [];
        if (ReadonlyArray_isEmpty(buffer)) {
            delegate[DisposableLike_dispose]();
        }
        else {
            onComplete(buffer);
        }
    }));
    return instance;
}, props({
    [BufferingLike_buffer]: none,
    [BufferingLike_count]: 0,
}), {
    [SinkLike_notify](next) {
        const { [BufferingLike_buffer]: buffer, [BufferingLike_count]: count, } = this;
        buffer.push(next);
        if (buffer.length === count) {
            const buffer = this[BufferingLike_buffer];
            this[BufferingLike_buffer] = [];
            this[DelegatingLike_delegate][SinkLike_notify](buffer);
        }
    },
})))();
export default Sink_bufferMixin;
