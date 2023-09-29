/// <reference types="./Enumerable.decodeWithCharset.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { error, newInstance, none, partial, pipe, } from "../../../functions.js";
import { EnumeratorLike_current, EnumeratorLike_hasCurrent, EnumeratorLike_isCompleted, EnumeratorLike_move, } from "../../../ix.js";
import { DisposableLike_dispose } from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import DisposableMixin from "../../../utils/__mixins__/DisposableMixin.js";
import MutableEnumeratorMixin, { MutableEnumeratorLike_reset, } from "../../__mixins__/MutableEnumeratorMixin.js";
import Enumerable_lift from "./Enumerable.lift.js";
const Enumerable_decodeWithCharset = 
/*@__PURE__*/ (() => {
    const DecodeWithCharsetEnumerator_delegate = Symbol("DecodeWithCharsetEnumerator_delegate");
    const DecodeWithCharsetEnumerator_textDecoder = Symbol("DecodeWithCharsetEnumerator_textDecoder");
    const createDecodeWithCharsetEnumerator = createInstanceFactory(mix(include(MutableEnumeratorMixin(), DisposableMixin), function DecodeWithCharsetEnumerator(instance, delegate, charset) {
        init(MutableEnumeratorMixin(), instance);
        init(DisposableMixin, instance);
        pipe(instance, Disposable.add(delegate));
        const textDecoder = newInstance(TextDecoder, charset ?? "utf-8", {
            fatal: true,
        });
        instance[DecodeWithCharsetEnumerator_textDecoder] = textDecoder;
        instance[DecodeWithCharsetEnumerator_delegate] = delegate;
        pipe(instance, Disposable.onDisposed(_ => {
            textDecoder.decode();
        }));
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
            try {
                while (delegate[EnumeratorLike_move]()) {
                    const data = decoder.decode(delegate[EnumeratorLike_current], {
                        stream: true,
                    });
                    if (data.length > 0) {
                        this[EnumeratorLike_current] = data;
                        break;
                    }
                }
                if (!this[EnumeratorLike_hasCurrent]) {
                    const data = decoder.decode();
                    if (data.length > 0) {
                        this[EnumeratorLike_current] = data;
                    }
                }
            }
            catch (e) {
                // Catch errors thrown by the text decoder
                this[DisposableLike_dispose](error(e));
                this[MutableEnumeratorLike_reset]();
            }
            this[EnumeratorLike_isCompleted] = !this[EnumeratorLike_hasCurrent];
            if (this[EnumeratorLike_isCompleted]) {
                this[DisposableLike_dispose]();
            }
            return this[EnumeratorLike_hasCurrent];
        },
    }));
    return options => pipe(createDecodeWithCharsetEnumerator, partial(options?.charset), Enumerable_lift);
})();
export default Enumerable_decodeWithCharset;
