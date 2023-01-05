/// <reference types="./SinkLike.decodeWithCharsetMixin.d.ts" />
import { mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { newInstance, pipe, isEmpty, none } from '../../../functions.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import DisposableLike__addTo from '../../../util/__internal__/DisposableLike/DisposableLike.addTo.mjs';
import DisposableLike__dispose from '../../../util/__internal__/DisposableLike/DisposableLike.dispose.mjs';
import DisposableLike__mixin from '../../../util/__internal__/DisposableLike/DisposableLike.mixin.mjs';
import DisposableLike__onComplete from '../../../util/__internal__/DisposableLike/DisposableLike.onComplete.mjs';
import { sinkInto } from '../../ReactiveContainerLike.mjs';
import { DelegatingSinkLike_delegate } from '../rx.internal.mjs';
import SinkLike__notify from './SinkLike.notify.mjs';

const SinkLike__decodeWithCharsetMixin = (fromArray) => {
    const DecodeWithCharsetSink_private_textDecoder = Symbol("DecodeWithCharsetSink_private_textDecoder");
    return mix(include(DisposableLike__mixin), function DecodeWithCharsetSink(instance, delegate, charset) {
        init(DisposableLike__mixin, instance);
        const textDecoder = newInstance(TextDecoder, charset, { fatal: true });
        instance[DecodeWithCharsetSink_private_textDecoder] = textDecoder;
        instance[DelegatingSinkLike_delegate] = delegate;
        pipe(instance, DisposableLike__addTo(delegate), DisposableLike__onComplete(() => {
            const data = textDecoder.decode();
            if (!isEmpty(data)) {
                pipe([data], fromArray, sinkInto(delegate));
            }
            else {
                pipe(delegate, DisposableLike__dispose());
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
                pipe(this[DelegatingSinkLike_delegate], SinkLike__notify(data));
            }
        },
    });
};

export { SinkLike__decodeWithCharsetMixin as default };
