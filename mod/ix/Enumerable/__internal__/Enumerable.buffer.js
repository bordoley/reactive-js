/// <reference types="./Enumerable.buffer.d.ts" />

import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import { clampPositiveNonZeroInteger } from "../../../__internal__/math.js";
import { createInstanceFactory, include, init, mix, props, unsafeCast, } from "../../../__internal__/mixins.js";
import { none, partial, pipe } from "../../../functions.js";
import { EnumeratorLike_current, EnumeratorLike_hasCurrent, EnumeratorLike_isCompleted, EnumeratorLike_move, } from "../../../ix.js";
import { DelegatingDisposableLike_delegate, } from "../../../utils.js";
import Disposable_delegatingMixin from "../../../utils/Disposable/__internal__/Disposable.delegatingMixin.js";
import Enumerable_lift from "./Enumerable.lift.js";
const Enumerable_buffer = /*@__PURE__*/ (() => {
    const BufferEnumerator_buffer = Symbol("BufferEnumerator_buffer");
    const BufferEnumerator_count = Symbol("BufferEnumerator_count");
    const createBufferEnumerator = createInstanceFactory(mix(include(Disposable_delegatingMixin()), function BufferEnumerator(instance, delegate, count) {
        init(Disposable_delegatingMixin(), instance, delegate);
        instance[BufferEnumerator_count] = clampPositiveNonZeroInteger(count ?? MAX_SAFE_INTEGER);
        return instance;
    }, props({
        [BufferEnumerator_buffer]: none,
        [BufferEnumerator_count]: 0,
        [EnumeratorLike_hasCurrent]: false,
        [EnumeratorLike_isCompleted]: false,
    }), {
        get [EnumeratorLike_current]() {
            unsafeCast(this);
            return this[BufferEnumerator_buffer];
        },
        [EnumeratorLike_move]() {
            if (this[EnumeratorLike_isCompleted]) {
                return false;
            }
            const delegate = this[DelegatingDisposableLike_delegate];
            const buffer = [];
            this[BufferEnumerator_buffer] = buffer;
            this[EnumeratorLike_hasCurrent] = false;
            while (delegate[EnumeratorLike_move]()) {
                this[EnumeratorLike_hasCurrent] = true;
                buffer.push(delegate[EnumeratorLike_current]);
                if (buffer.length >= this[BufferEnumerator_count]) {
                    break;
                }
            }
            this[EnumeratorLike_isCompleted] = !this[EnumeratorLike_hasCurrent];
            return this[EnumeratorLike_hasCurrent];
        },
    }));
    return (options) => pipe(createBufferEnumerator, partial(options?.count), Enumerable_lift);
})();
export default Enumerable_buffer;
