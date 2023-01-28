/// <reference types="./Sink.decodeWithCharsetMixin.d.ts" />
import { mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { newInstance, pipe, isEmpty, none } from '../../../functions.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import Disposable_addTo from '../../../util/__internal__/Disposable/Disposable.addTo.mjs';
import Disposable_dispose from '../../../util/__internal__/Disposable/Disposable.dispose.mjs';
import Disposable_mixin from '../../../util/__internal__/Disposable/Disposable.mixin.mjs';
import Disposable_onComplete from '../../../util/__internal__/Disposable/Disposable.onComplete.mjs';
import ReactiveContainer_sinkInto from '../ReactiveContainer/ReactiveContainer.sinkInto.mjs';
import { DelegatingSinkLike_delegate } from '../rx.internal.mjs';

const Sink_decodeWithCharsetMixin = (fromArray) => {
    const DecodeWithCharsetSinkMixin_textDecoder = Symbol("DecodeWithCharsetSinkMixin_textDecoder");
    return mix(include(Disposable_mixin), function DecodeWithCharsetSinkMixin(instance, delegate, charset) {
        init(Disposable_mixin, instance);
        const textDecoder = newInstance(TextDecoder, charset, { fatal: true });
        instance[DecodeWithCharsetSinkMixin_textDecoder] = textDecoder;
        instance[DelegatingSinkLike_delegate] = delegate;
        pipe(instance, Disposable_addTo(delegate), Disposable_onComplete(() => {
            const data = textDecoder.decode();
            if (!isEmpty(data)) {
                pipe([data], fromArray, ReactiveContainer_sinkInto(delegate));
            }
            else {
                pipe(delegate, Disposable_dispose());
            }
        }));
        return instance;
    }, props({
        [DelegatingSinkLike_delegate]: none,
        [DecodeWithCharsetSinkMixin_textDecoder]: none,
    }), {
        [SinkLike_notify](next) {
            const data = this[DecodeWithCharsetSinkMixin_textDecoder].decode(next, {
                stream: true,
            });
            if (!isEmpty(data)) {
                this[DelegatingSinkLike_delegate][SinkLike_notify](data);
            }
        },
    });
};

export { Sink_decodeWithCharsetMixin as default };
