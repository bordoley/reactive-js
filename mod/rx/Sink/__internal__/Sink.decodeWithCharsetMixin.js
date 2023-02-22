/// <reference types="./Sink.decodeWithCharsetMixin.d.ts" />

import { DelegatingLike_delegate, delegatingMixin, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { isEmpty, newInstance, none, pipe } from "../../../functions.js";
import { SinkLike_notify, } from "../../../rx.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import ReactiveContainer_sinkInto from "../../ReactiveContainer/__internal__/ReactiveContainer.sinkInto.js";
const Sink_decodeWithCharsetMixin = (fromReadonlyArray) => {
    const DecodeWithCharsetSinkMixin_textDecoder = Symbol("DecodeWithCharsetSinkMixin_textDecoder");
    return mix(include(Disposable_mixin, delegatingMixin()), function DecodeWithCharsetSinkMixin(instance, delegate, charset) {
        init(Disposable_mixin, instance);
        init(delegatingMixin(), instance, delegate);
        const textDecoder = newInstance(TextDecoder, charset, { fatal: true });
        instance[DecodeWithCharsetSinkMixin_textDecoder] = textDecoder;
        pipe(instance, Disposable_addTo(delegate), Disposable_onComplete(() => {
            const data = textDecoder.decode();
            if (!isEmpty(data)) {
                pipe([data], fromReadonlyArray, ReactiveContainer_sinkInto(delegate));
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
export default Sink_decodeWithCharsetMixin;
