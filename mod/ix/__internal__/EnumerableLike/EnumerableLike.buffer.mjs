/// <reference types="./EnumerableLike.buffer.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import StatefulContainerLike__buffer from '../../../containers/__internal__/StatefulContainerLike/StatefulContainerLike.buffer.mjs';
import { pipe, none, getLength } from '../../../functions.mjs';
import { SourceLike_move, EnumeratorLike_current } from '../../../ix.mjs';
import DisposableLike__add from '../../../util/__internal__/DisposableLike/DisposableLike.add.mjs';
import DisposableLike__dispose from '../../../util/__internal__/DisposableLike/DisposableLike.dispose.mjs';
import DisposableLike__mixin from '../../../util/__internal__/DisposableLike/DisposableLike.mixin.mjs';
import EnumeratorLike__getCurrent from '../EnumeratorLike/EnumeratorLike.getCurrent.mjs';
import EnumeratorLike__move from '../EnumeratorLike/EnumeratorLike.move.mjs';
import MutableEnumeratorLike__mixin from '../MutableEnumeratorLike/MutableEnumeratorLike.mixin.mjs';
import EnumerableLike__liftT from './EnumerableLike.liftT.mjs';

const EnumerableLike__buffer = 
/*@__PURE__*/ (() => {
    const typedMutableEnumeratorMixin = MutableEnumeratorLike__mixin();
    return pipe(createInstanceFactory(mix(include(DisposableLike__mixin, typedMutableEnumeratorMixin), function BufferEnumerator(instance, delegate, maxBufferSize) {
        init(DisposableLike__mixin, instance);
        init(typedMutableEnumeratorMixin, instance);
        instance.delegate = delegate;
        instance.maxBufferSize = maxBufferSize;
        pipe(instance, DisposableLike__add(delegate));
        return instance;
    }, props({
        delegate: none,
        maxBufferSize: 0,
    }), {
        [SourceLike_move]() {
            const buffer = [];
            const { delegate, maxBufferSize } = this;
            while (getLength(buffer) < maxBufferSize &&
                EnumeratorLike__move(delegate)) {
                buffer.push(EnumeratorLike__getCurrent(delegate));
            }
            const bufferLength = getLength(buffer);
            if (bufferLength > 0) {
                this[EnumeratorLike_current] = buffer;
            }
            else if (bufferLength === 0) {
                pipe(this, DisposableLike__dispose());
            }
        },
    })), StatefulContainerLike__buffer(EnumerableLike__liftT));
})();

export { EnumerableLike__buffer as default };
