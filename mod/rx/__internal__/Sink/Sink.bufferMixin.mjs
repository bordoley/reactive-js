/// <reference types="./Sink.bufferMixin.d.ts" />
import { mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { pipe, isEmpty, none, getLength } from '../../../functions.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import Disposable$addTo from '../../../util/__internal__/Disposable/Disposable.addTo.mjs';
import Disposable$dispose from '../../../util/__internal__/Disposable/Disposable.dispose.mjs';
import Disposable$mixin from '../../../util/__internal__/Disposable/Disposable.mixin.mjs';
import Disposable$onComplete from '../../../util/__internal__/Disposable/Disposable.onComplete.mjs';
import ReactiveContainer$sinkInto from '../ReactiveContainer/ReactiveContainer.sinkInto.mjs';
import { DelegatingSinkLike_delegate } from '../rx.internal.mjs';
import Sink$notify from './Sink.notify.mjs';

const Sink$bufferMixin = (fromArray) => {
    const BufferSink_private_maxBufferSize = Symbol("BufferSink_private_maxBufferSize");
    const BufferSink_private_buffer = Symbol("BufferSink_private_buffer");
    return mix(include(Disposable$mixin), function BufferSink(instance, delegate, maxBufferSize) {
        init(Disposable$mixin, instance);
        instance[DelegatingSinkLike_delegate] = delegate;
        instance[BufferSink_private_maxBufferSize] = maxBufferSize;
        instance[BufferSink_private_buffer] = [];
        pipe(instance, Disposable$addTo(delegate), Disposable$onComplete(() => {
            const { [BufferSink_private_buffer]: buffer } = instance;
            instance[BufferSink_private_buffer] = [];
            if (isEmpty(buffer)) {
                pipe(instance[DelegatingSinkLike_delegate], Disposable$dispose());
            }
            else {
                pipe([buffer], fromArray, ReactiveContainer$sinkInto(instance[DelegatingSinkLike_delegate]));
            }
        }));
        return instance;
    }, props({
        [DelegatingSinkLike_delegate]: none,
        [BufferSink_private_maxBufferSize]: 0,
        [BufferSink_private_buffer]: none,
    }), {
        [SinkLike_notify](next) {
            const { [BufferSink_private_buffer]: buffer, [BufferSink_private_maxBufferSize]: maxBufferSize, } = this;
            buffer.push(next);
            if (getLength(buffer) === maxBufferSize) {
                const buffer = this[BufferSink_private_buffer];
                this[BufferSink_private_buffer] = [];
                pipe(this[DelegatingSinkLike_delegate], Sink$notify(buffer));
            }
        },
    });
};

export { Sink$bufferMixin as default };
