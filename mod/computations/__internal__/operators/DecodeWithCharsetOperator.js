/// <reference types="./DecodeWithCharsetOperator.d.ts" />

import { Array_length } from "../../../__internal__/constants.js";
import { include, init, mixInstanceFactory, props, proto, } from "../../../__internal__/mixins.js";
import { newInstance, none } from "../../../functions.js";
import DelegatingLiftedOperatorMixin, { DelegatingLiftedOperatorLike_delegate, DelegatingLiftedOperatorLike_onCompleted, } from "../../__mixins__/DelegatingLiftedOperatorMixin.js";
import { LiftedOperatorLike_complete, LiftedOperatorLike_notify, } from "../LiftedSource.js";
export const create = /*@__PURE__*/ (() => {
    const DecodeWithCharsetOperator_textDecoder = Symbol("DecodeWithCharsetOperator_textDecoder");
    return mixInstanceFactory(include(DelegatingLiftedOperatorMixin()), function DecodeWithCharsetOperator(delegate, options) {
        init(DelegatingLiftedOperatorMixin(), this, delegate);
        const textDecoder = newInstance(TextDecoder, options?.charset ?? "utf-8", options);
        this[DecodeWithCharsetOperator_textDecoder] = textDecoder;
        return this;
    }, props({
        [DecodeWithCharsetOperator_textDecoder]: none,
    }), proto({
        [LiftedOperatorLike_notify](next) {
            const data = this[DecodeWithCharsetOperator_textDecoder].decode(next, {
                stream: true,
            });
            const shouldEmit = data[Array_length] > 0;
            if (shouldEmit) {
                this[DelegatingLiftedOperatorLike_delegate][LiftedOperatorLike_notify](data);
            }
        },
        [DelegatingLiftedOperatorLike_onCompleted]() {
            const data = this[DecodeWithCharsetOperator_textDecoder].decode(newInstance(Uint8Array, []), {
                stream: false,
            });
            const delegate = this[DelegatingLiftedOperatorLike_delegate];
            if (data[Array_length] > 0) {
                delegate[LiftedOperatorLike_notify](data);
            }
            delegate[LiftedOperatorLike_complete]();
        },
    }));
})();
