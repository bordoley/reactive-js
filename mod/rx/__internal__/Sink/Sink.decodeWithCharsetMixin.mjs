/// <reference types="./Sink.decodeWithCharsetMixin.d.ts" />
import { mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { newInstance, pipe, isEmpty, none } from '../../../functions.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import Disposable$addTo from '../../../util/__internal__/Disposable/Disposable.addTo.mjs';
import Disposable$dispose from '../../../util/__internal__/Disposable/Disposable.dispose.mjs';
import Disposable$mixin from '../../../util/__internal__/Disposable/Disposable.mixin.mjs';
import Disposable$onComplete from '../../../util/__internal__/Disposable/Disposable.onComplete.mjs';
import ReactiveContainer$sinkInto from '../ReactiveContainer/ReactiveContainer.sinkInto.mjs';
import { DelegatingSinkLike_delegate } from '../rx.internal.mjs';
import Sink$notify from './Sink.notify.mjs';

const Sink$decodeWithCharsetMixin = (fromArray) => {
    const DecodeWithCharsetSink_private_textDecoder = Symbol("DecodeWithCharsetSink_private_textDecoder");
    return mix(include(Disposable$mixin), function DecodeWithCharsetSink(instance, delegate, charset) {
        init(Disposable$mixin, instance);
        const textDecoder = newInstance(TextDecoder, charset, { fatal: true });
        instance[DecodeWithCharsetSink_private_textDecoder] = textDecoder;
        instance[DelegatingSinkLike_delegate] = delegate;
        pipe(instance, Disposable$addTo(delegate), Disposable$onComplete(() => {
            const data = textDecoder.decode();
            if (!isEmpty(data)) {
                pipe([data], fromArray, ReactiveContainer$sinkInto(delegate));
            }
            else {
                pipe(delegate, Disposable$dispose());
            }
        }));
        return instance;
    }, props({
        [DelegatingSinkLike_delegate]: none,
        [DecodeWithCharsetSink_private_textDecoder]: none,
    }), {
        [SinkLike_notify](next) {
            const data = this[DecodeWithCharsetSink_private_textDecoder].decode(next, { stream: true });
            if (!isEmpty(data)) {
                pipe(this[DelegatingSinkLike_delegate], Sink$notify(data));
            }
        },
    });
};

export { Sink$decodeWithCharsetMixin as default };
