/// <reference types="./Sink.bufferMixin.d.ts" />

import { DelegatingLike_delegate, delegatingMixin, include, init, mix, props, } from "../../../__internal__/mixins.js";
import ReadonlyArray_getLength from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.getLength.js";
import ReadonlyArray_isEmpty from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.isEmpty.js";
import { none, pipe } from "../../../functions.js";
import { SinkLike_notify, } from "../../../rx.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import ReactiveContainer_sinkInto from "../../ReactiveContainer/__internal__/ReactiveContainer.sinkInto.js";
const Sink_bufferMixin = (fromReadonlyArray) => {
    const BufferSinkMixin_maxBufferSize = Symbol("BufferSinkMixin_maxBufferSize");
    const BufferSinkMixin_buffer = Symbol("BufferSinkMixin_buffer");
    return mix(include(Disposable_mixin, delegatingMixin()), function BufferSinkMixin(instance, delegate, maxBufferSize) {
        init(Disposable_mixin, instance);
        init(delegatingMixin(), instance, delegate);
        instance[BufferSinkMixin_maxBufferSize] = maxBufferSize;
        instance[BufferSinkMixin_buffer] = [];
        pipe(instance, Disposable_addTo(delegate), Disposable_onComplete(() => {
            const { [BufferSinkMixin_buffer]: buffer } = instance;
            instance[BufferSinkMixin_buffer] = [];
            if (ReadonlyArray_isEmpty(buffer)) {
                pipe(instance[DelegatingLike_delegate], Disposable_dispose());
            }
            else {
                pipe([buffer], fromReadonlyArray, ReactiveContainer_sinkInto(instance[DelegatingLike_delegate]));
            }
        }));
        return instance;
    }, props({
        [BufferSinkMixin_maxBufferSize]: 0,
        [BufferSinkMixin_buffer]: none,
    }), {
        [SinkLike_notify](next) {
            const { [BufferSinkMixin_buffer]: buffer, [BufferSinkMixin_maxBufferSize]: maxBufferSize, } = this;
            buffer.push(next);
            if (ReadonlyArray_getLength(buffer) === maxBufferSize) {
                const buffer = this[BufferSinkMixin_buffer];
                this[BufferSinkMixin_buffer] = [];
                this[DelegatingLike_delegate][SinkLike_notify](buffer);
            }
        },
    });
};
export default Sink_bufferMixin;
