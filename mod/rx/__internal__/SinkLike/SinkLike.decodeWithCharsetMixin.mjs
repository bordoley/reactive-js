/// <reference types="./SinkLike.decodeWithCharsetMixin.d.ts" />
import { mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { newInstance, pipe, isEmpty, none } from '../../../functions.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import { addTo, onComplete, dispose } from '../../../util/DisposableLike.mjs';
import disposableMixin from '../../../util/__internal__/DisposableLike/DisposableLike.mixin.mjs';
import { sinkInto } from '../../ReactiveContainerLike.mjs';
import { notify } from '../../SinkLike.mjs';
import { DelegatingSinkLike_delegate } from '../rx.internal.mjs';

const decodeWithCharsetMixin = (fromArray) => {
    const DecodeWithCharsetSink_private_textDecoder = Symbol("DecodeWithCharsetSink_private_textDecoder");
    return mix(include(disposableMixin), function DecodeWithCharsetSink(instance, delegate, charset) {
        init(disposableMixin, instance);
        const textDecoder = newInstance(TextDecoder, charset, { fatal: true });
        instance[DecodeWithCharsetSink_private_textDecoder] = textDecoder;
        instance[DelegatingSinkLike_delegate] = delegate;
        pipe(instance, addTo(delegate), onComplete(() => {
            const data = textDecoder.decode();
            if (!isEmpty(data)) {
                pipe([data], fromArray, sinkInto(delegate));
            }
            else {
                pipe(delegate, dispose());
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
                pipe(this[DelegatingSinkLike_delegate], notify(data));
            }
        },
    });
};

export { decodeWithCharsetMixin as default };
