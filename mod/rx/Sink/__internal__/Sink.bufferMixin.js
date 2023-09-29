/// <reference types="./Sink.bufferMixin.d.ts" />

import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import { clampPositiveNonZeroInteger } from "../../../__internal__/math.js";
import { include, init, mix, props, } from "../../../__internal__/mixins.js";
import { none, pipe, returns, } from "../../../functions.js";
import { SinkLike_notify } from "../../../rx.js";
import { DisposableLike_dispose } from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import Disposable_mixin from "../../../utils/Disposable/__internal__/Disposable.mixin.js";
const BufferSinkMixin_delegate = Symbol("BufferSinkMixin_delegate");
const BufferSinkMixin_buffer = Symbol("BufferSinkMixin_buffer");
const BufferSinkMixin_count = Symbol("BufferingLike_count");
const Sink_bufferMixin = /*@__PURE__*/ (() => returns(mix(include(Disposable_mixin), function BufferSinkMixin(instance, delegate, count, onComplete) {
    init(Disposable_mixin, instance, delegate);
    instance[BufferSinkMixin_delegate] = delegate;
    instance[BufferSinkMixin_count] = clampPositiveNonZeroInteger(count ?? MAX_SAFE_INTEGER);
    instance[BufferSinkMixin_buffer] = [];
    pipe(instance, Disposable.addTo(delegate), Disposable.onComplete(() => {
        const { [BufferSinkMixin_buffer]: buffer } = instance;
        instance[BufferSinkMixin_buffer] = [];
        if (buffer.length > 0) {
            onComplete(buffer);
        }
        else {
            delegate[DisposableLike_dispose]();
        }
    }));
    return instance;
}, props({
    [BufferSinkMixin_delegate]: none,
    [BufferSinkMixin_buffer]: none,
    [BufferSinkMixin_count]: 0,
}), {
    [SinkLike_notify](next) {
        const { [BufferSinkMixin_buffer]: buffer, [BufferSinkMixin_count]: count, } = this;
        buffer.push(next);
        if (buffer.length === count) {
            const buffer = this[BufferSinkMixin_buffer];
            this[BufferSinkMixin_buffer] = [];
            this[BufferSinkMixin_delegate][SinkLike_notify](buffer);
        }
    },
})))();
export default Sink_bufferMixin;
