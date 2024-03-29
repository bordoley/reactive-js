/// <reference types="./Enumerable.buffer.d.ts" />

import { Array_length, Array_push, MAX_SAFE_INTEGER, } from "../../../__internal__/constants.js";
import { clampPositiveNonZeroInteger } from "../../../__internal__/math.js";
import { include, init, mixInstanceFactory, props, unsafeCast, } from "../../../__internal__/mixins.js";
import { EnumeratorLike_current, EnumeratorLike_hasCurrent, EnumeratorLike_isCompleted, EnumeratorLike_move, } from "../../../collections.js";
import { none, partial, pipe } from "../../../functions.js";
import DelegatingEnumeratorMixin, { DelegatingEnumeratorMixinLike_delegate, } from "../../__mixins__/DelegatingEnumeratorMixin.js";
import Enumerable_lift from "./Enumerable.lift.js";
const Enumerable_buffer = /*@__PURE__*/ (() => {
    const BufferEnumerator_buffer = Symbol("BufferEnumerator_buffer");
    const BufferEnumerator_count = Symbol("BufferEnumerator_count");
    const createBufferEnumerator = mixInstanceFactory(include(DelegatingEnumeratorMixin()), function BufferEnumerator(instance, delegate, count) {
        init(DelegatingEnumeratorMixin(), instance, delegate);
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
            const delegate = this[DelegatingEnumeratorMixinLike_delegate];
            const buffer = [];
            this[BufferEnumerator_buffer] = buffer;
            this[EnumeratorLike_hasCurrent] = false;
            while (delegate[EnumeratorLike_move]()) {
                this[EnumeratorLike_hasCurrent] = true;
                buffer[Array_push](delegate[EnumeratorLike_current]);
                if (buffer[Array_length] >= this[BufferEnumerator_count]) {
                    break;
                }
            }
            this[EnumeratorLike_isCompleted] = !this[EnumeratorLike_hasCurrent];
            return this[EnumeratorLike_hasCurrent];
        },
    });
    return (options) => pipe(createBufferEnumerator, partial(options?.count), Enumerable_lift);
})();
export default Enumerable_buffer;
