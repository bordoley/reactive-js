/// <reference types="./Sink.decodeWithCharsetMixin.d.ts" />
import { mix, include, delegatingMixin, init, props, DelegatingLike_delegate } from '../../../__internal__/mixins.mjs';
import { newInstance, pipe, isEmpty, none } from '../../../functions.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import Disposable_addTo from '../../../util/Disposable/__internal__/Disposable.addTo.mjs';
import Disposable_dispose from '../../../util/Disposable/__internal__/Disposable.dispose.mjs';
import Disposable_mixin from '../../../util/Disposable/__internal__/Disposable.mixin.mjs';
import Disposable_onComplete from '../../../util/Disposable/__internal__/Disposable.onComplete.mjs';
import ReactiveContainer_sinkInto from '../../ReactiveContainer/__internal__/ReactiveContainer.sinkInto.mjs';

const Sink_decodeWithCharsetMixin = (fromArray) => {
    const DecodeWithCharsetSinkMixin_textDecoder = Symbol("DecodeWithCharsetSinkMixin_textDecoder");
    return mix(include(Disposable_mixin, delegatingMixin()), function DecodeWithCharsetSinkMixin(instance, delegate, charset) {
        init(Disposable_mixin, instance);
        init(delegatingMixin(), instance, delegate);
        const textDecoder = newInstance(TextDecoder, charset, { fatal: true });
        instance[DecodeWithCharsetSinkMixin_textDecoder] = textDecoder;
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
        [DecodeWithCharsetSinkMixin_textDecoder]: none,
    }), {
        [SinkLike_notify](next) {
            const data = this[DecodeWithCharsetSinkMixin_textDecoder].decode(next, {
                stream: true,
            });
            if (!isEmpty(data)) {
                this[DelegatingLike_delegate][SinkLike_notify](data);
            }
        },
    });
};

export { Sink_decodeWithCharsetMixin as default };
