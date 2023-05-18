/// <reference types="./Enumerator.buffer.d.ts" />

import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_delegatingMixin from "../../Disposable/__internal__/Disposable.delegatingMixin.js";
import { MAX_SAFE_INTEGER } from "../../__internal__/constants.js";
import { clampPositiveInteger } from "../../__internal__/math.js";
import { createInstanceFactory, include, init, mix, props, } from "../../__internal__/mixins.js";
import { BufferingLike_buffer, BufferingLike_count, DelegatingLike_delegate, } from "../../__internal__/types.js";
import { none, unsafeCast } from "../../functions.js";
import { EnumeratorLike_current, EnumeratorLike_hasCurrent, EnumeratorLike_move, } from "../../types.js";
const Enumerator_buffer = 
/*@__PURE__*/ (() => {
    const createBufferEnumerator = createInstanceFactory(mix(include(Delegating_mixin(), Disposable_delegatingMixin), function BufferEnumerator(instance, delegate, count) {
        init(Delegating_mixin(), instance, delegate);
        init(Disposable_delegatingMixin, instance, delegate);
        instance[BufferingLike_count] = count;
        return instance;
    }, props({
        [BufferingLike_buffer]: none,
        [BufferingLike_count]: 0,
        [EnumeratorLike_hasCurrent]: false,
    }), {
        get [EnumeratorLike_current]() {
            unsafeCast(this);
            return this[BufferingLike_buffer];
        },
        [EnumeratorLike_move]() {
            const delegate = this[DelegatingLike_delegate];
            const buffer = [];
            this[BufferingLike_buffer] = buffer;
            this[EnumeratorLike_hasCurrent] = false;
            while (delegate[EnumeratorLike_move]()) {
                this[EnumeratorLike_hasCurrent] = true;
                buffer.push(delegate[EnumeratorLike_current]);
                if (buffer.length >= this[BufferingLike_count]) {
                    break;
                }
            }
            return this[EnumeratorLike_hasCurrent];
        },
    }));
    return (options) => (delegate) => createBufferEnumerator(delegate, clampPositiveInteger(options?.count ?? MAX_SAFE_INTEGER));
})();
export default Enumerator_buffer;
