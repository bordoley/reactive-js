/// <reference types="./Enumerable.decodeWithCharset.d.ts" />

import { Array_length } from "../../../__internal__/constants.js";
import { include, init, mixInstanceFactory, props, } from "../../../__internal__/mixins.js";
import { EnumeratorLike_current, EnumeratorLike_hasCurrent, EnumeratorLike_isCompleted, EnumeratorLike_move, } from "../../../collections.js";
import { newInstance, none, partial, pipe, } from "../../../functions.js";
import MutableEnumeratorMixin, { MutableEnumeratorLike_reset, } from "../../__mixins__/MutableEnumeratorMixin.js";
import Enumerable_lift from "./Enumerable.lift.js";
const Enumerable_decodeWithCharset = 
/*@__PURE__*/ (() => {
    const DecodeWithCharsetEnumerator_delegate = Symbol("DecodeWithCharsetEnumerator_delegate");
    const DecodeWithCharsetEnumerator_textDecoder = Symbol("DecodeWithCharsetEnumerator_textDecoder");
    const createDecodeWithCharsetEnumerator = mixInstanceFactory(include(MutableEnumeratorMixin()), function DecodeWithCharsetEnumerator(instance, delegate, charset, options) {
        init(MutableEnumeratorMixin(), instance);
        const textDecoder = newInstance(TextDecoder, charset ?? "utf-8", options);
        instance[DecodeWithCharsetEnumerator_textDecoder] = textDecoder;
        instance[DecodeWithCharsetEnumerator_delegate] = delegate;
        return instance;
    }, props({
        [DecodeWithCharsetEnumerator_delegate]: none,
        [DecodeWithCharsetEnumerator_textDecoder]: none,
    }), {
        [EnumeratorLike_move]() {
            if (this[MutableEnumeratorLike_reset]()) {
                return false;
            }
            const delegate = this[DecodeWithCharsetEnumerator_delegate];
            const decoder = this[DecodeWithCharsetEnumerator_textDecoder];
            while (delegate[EnumeratorLike_move]()) {
                const data = decoder.decode(delegate[EnumeratorLike_current], {
                    stream: true,
                });
                if (data[Array_length] > 0) {
                    this[EnumeratorLike_current] = data;
                    break;
                }
            }
            if (!this[EnumeratorLike_hasCurrent]) {
                const data = decoder.decode(newInstance(Uint8Array, []), {
                    stream: false,
                });
                if (data[Array_length] > 0) {
                    this[EnumeratorLike_current] = data;
                }
            }
            this[EnumeratorLike_isCompleted] = !this[EnumeratorLike_hasCurrent];
            return this[EnumeratorLike_hasCurrent];
        },
    });
    return options => pipe(createDecodeWithCharsetEnumerator, partial(options?.charset, options), Enumerable_lift);
})();
export default Enumerable_decodeWithCharset;
