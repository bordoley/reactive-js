/// <reference types="./Enumerable.buffer.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import StatefulContainer_buffer from '../../../containers/__internal__/StatefulContainer/StatefulContainer.buffer.mjs';
import { pipe, none, getLength } from '../../../functions.mjs';
import { SourceLike_move, EnumeratorLike_current } from '../../../ix.mjs';
import Disposable_add from '../../../util/__internal__/Disposable/Disposable.add.mjs';
import Disposable_dispose from '../../../util/__internal__/Disposable/Disposable.dispose.mjs';
import Disposable_mixin from '../../../util/__internal__/Disposable/Disposable.mixin.mjs';
import Enumerator_getCurrent from '../Enumerator/Enumerator.getCurrent.mjs';
import Enumerator_move from '../Enumerator/Enumerator.move.mjs';
import MutableEnumerator_mixin from '../MutableEnumerator/MutableEnumerator.mixin.mjs';
import Enumerable_liftT from './Enumerable.liftT.mjs';

const Enumerable_buffer = /*@__PURE__*/ (() => {
    const typedMutableEnumeratorMixin = MutableEnumerator_mixin();
    return pipe(createInstanceFactory(mix(include(Disposable_mixin, typedMutableEnumeratorMixin), function BufferEnumerator(instance, delegate, maxBufferSize) {
        init(Disposable_mixin, instance);
        init(typedMutableEnumeratorMixin, instance);
        instance.delegate = delegate;
        instance.maxBufferSize = maxBufferSize;
        pipe(instance, Disposable_add(delegate));
        return instance;
    }, props({
        delegate: none,
        maxBufferSize: 0,
    }), {
        [SourceLike_move]() {
            const buffer = [];
            const { delegate, maxBufferSize } = this;
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

export { Enumerable_buffer as default };
