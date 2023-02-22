/// <reference types="./Enumerable.buffer.d.ts" />

import { DelegatingLike_delegate, createInstanceFactory, delegatingMixin, include, init, mix, props, } from "../../../__internal__/mixins.js";
import StatefulContainer_buffer from "../../../containers/StatefulContainer/__internal__/StatefulContainer.buffer.js";
import { getLength, pipe } from "../../../functions.js";
import { EnumeratorLike_current, SourceLike_move, } from "../../../ix.js";
import Disposable_add from "../../../util/Disposable/__internal__/Disposable.add.js";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import Enumerator_getCurrent from "../../Enumerator/__internal__/Enumerator.getCurrent.js";
import Enumerator_move from "../../Enumerator/__internal__/Enumerator.move.js";
import MutableEnumerator_mixin from "../../Enumerator/__internal__/MutableEnumerator.mixin.js";
import Enumerable_liftT from "./Enumerable.liftT.js";
const Enumerable_buffer = /*@__PURE__*/ (() => {
    const typedMutableEnumeratorMixin = MutableEnumerator_mixin();
    const BufferEnumerator_maxBufferSize = Symbol("BufferEnumerator_maxBufferSize");
    return pipe(createInstanceFactory(mix(include(Disposable_mixin, typedMutableEnumeratorMixin, delegatingMixin()), function BufferEnumerator(instance, delegate, maxBufferSize) {
        init(Disposable_mixin, instance);
        init(typedMutableEnumeratorMixin, instance);
        init(delegatingMixin(), instance, delegate);
        instance[BufferEnumerator_maxBufferSize] = maxBufferSize;
        pipe(instance, Disposable_add(delegate));
        return instance;
    }, props({
        [BufferEnumerator_maxBufferSize]: 0,
    }), {
        [SourceLike_move]() {
            const buffer = [];
            const { [DelegatingLike_delegate]: delegate, [BufferEnumerator_maxBufferSize]: maxBufferSize, } = this;
            while (getLength(buffer) < maxBufferSize &&
                Enumerator_move(delegate)) {
                buffer.push(Enumerator_getCurrent(delegate));
            }
            const bufferLength = getLength(buffer);
            if (bufferLength > 0) {
                this[EnumeratorLike_current] = buffer;
            }
            else if (bufferLength === 0) {
                pipe(this, Disposable_dispose());
            }
        },
    })), StatefulContainer_buffer(Enumerable_liftT));
})();
export default Enumerable_buffer;
