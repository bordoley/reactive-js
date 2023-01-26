/// <reference types="./Enumerable.buffer.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import StatefulContainer$buffer from '../../../containers/__internal__/StatefulContainer/StatefulContainer.buffer.mjs';
import { pipe, none, getLength } from '../../../functions.mjs';
import { SourceLike_move, EnumeratorLike_current } from '../../../ix.mjs';
import Disposable$add from '../../../util/__internal__/Disposable/Disposable.add.mjs';
import Disposable$dispose from '../../../util/__internal__/Disposable/Disposable.dispose.mjs';
import Disposable$mixin from '../../../util/__internal__/Disposable/Disposable.mixin.mjs';
import Enumerator$getCurrent from '../Enumerator/Enumerator.getCurrent.mjs';
import Enumerator$move from '../Enumerator/Enumerator.move.mjs';
import MutableEnumerator$mixin from '../MutableEnumerator/MutableEnumerator.mixin.mjs';
import Enumerable$liftT from './Enumerable.liftT.mjs';

const Enumerable$buffer = /*@__PURE__*/ (() => {
    const typedMutableEnumeratorMixin = MutableEnumerator$mixin();
    return pipe(createInstanceFactory(mix(include(Disposable$mixin, typedMutableEnumeratorMixin), function BufferEnumerator(instance, delegate, maxBufferSize) {
        init(Disposable$mixin, instance);
        init(typedMutableEnumeratorMixin, instance);
        instance.delegate = delegate;
        instance.maxBufferSize = maxBufferSize;
        pipe(instance, Disposable$add(delegate));
        return instance;
    }, props({
        delegate: none,
        maxBufferSize: 0,
    }), {
        [SourceLike_move]() {
            const buffer = [];
            const { delegate, maxBufferSize } = this;
            while (getLength(buffer) < maxBufferSize &&
                Enumerator$move(delegate)) {
                buffer.push(Enumerator$getCurrent(delegate));
            }
            const bufferLength = getLength(buffer);
            if (bufferLength > 0) {
                this[EnumeratorLike_current] = buffer;
            }
            else if (bufferLength === 0) {
                pipe(this, Disposable$dispose());
            }
        },
    })), StatefulContainer$buffer(Enumerable$liftT));
})();

export { Enumerable$buffer as default };
