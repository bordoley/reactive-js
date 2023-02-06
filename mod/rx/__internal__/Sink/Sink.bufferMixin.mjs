/// <reference types="./Sink.bufferMixin.d.ts" />
import { mix, include, delegatingMixin, init, DelegatingLike_delegate, props } from '../../../__internal__/mixins.mjs';
import { pipe, isEmpty, none, getLength } from '../../../functions.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import Disposable_addTo from '../../../util/__internal__/Disposable/Disposable.addTo.mjs';
import Disposable_dispose from '../../../util/__internal__/Disposable/Disposable.dispose.mjs';
import Disposable_mixin from '../../../util/__internal__/Disposable/Disposable.mixin.mjs';
import Disposable_onComplete from '../../../util/__internal__/Disposable/Disposable.onComplete.mjs';
import ReactiveContainer_sinkInto from '../ReactiveContainer/ReactiveContainer.sinkInto.mjs';

const Sink_bufferMixin = (fromArray) => {
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
            if (isEmpty(buffer)) {
                pipe(instance[DelegatingLike_delegate], Disposable_dispose());
            }
            else {
                pipe([buffer], fromArray, ReactiveContainer_sinkInto(instance[DelegatingLike_delegate]));
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
            if (getLength(buffer) === maxBufferSize) {
                const buffer = this[BufferSinkMixin_buffer];
                this[BufferSinkMixin_buffer] = [];
                this[DelegatingLike_delegate][SinkLike_notify](buffer);
            }
        },
    });
};

export { Sink_bufferMixin as default };
