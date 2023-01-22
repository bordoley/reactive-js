/// <reference types="./EnumerableLike.concatAll.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { pipe, none, returns } from '../../../functions.mjs';
import { SourceLike_move, EnumeratorLike_current } from '../../../ix.mjs';
import DisposableLike__add from '../../../util/__internal__/DisposableLike/DisposableLike.add.mjs';
import DisposableLike__dispose from '../../../util/__internal__/DisposableLike/DisposableLike.dispose.mjs';
import DisposableLike__disposed from '../../../util/__internal__/DisposableLike/DisposableLike.disposed.mjs';
import DisposableLike__isDisposed from '../../../util/__internal__/DisposableLike/DisposableLike.isDisposed.mjs';
import DisposableLike__mixin from '../../../util/__internal__/DisposableLike/DisposableLike.mixin.mjs';
import DisposableRefLike__mixin from '../../../util/__internal__/DisposableRefLike/DisposableRefLike.mixin.mjs';
import MutableRefLike__get from '../../../util/__internal__/MutableRefLike/MutableRefLike.get.mjs';
import MutableRefLike__set from '../../../util/__internal__/MutableRefLike/MutableRefLike.set.mjs';
import EnumeratorLike__getCurrent from '../EnumeratorLike/EnumeratorLike.getCurrent.mjs';
import EnumeratorLike__move from '../EnumeratorLike/EnumeratorLike.move.mjs';
import MutableEnumeratorLike__mixin from '../MutableEnumeratorLike/MutableEnumeratorLike.mixin.mjs';
import EnumerableLike__enumerate from './EnumerableLike.enumerate.mjs';
import EnumerableLike__lift from './EnumerableLike.lift.mjs';

const EnumerableLike__concatAll = 
/*@__PURE__*/ (() => {
    const typedMutableEnumeratorMixin = MutableEnumeratorLike__mixin();
    const typedDisposableRefMixin = DisposableRefLike__mixin();
    return pipe(createInstanceFactory(mix(include(DisposableLike__mixin, typedDisposableRefMixin, typedMutableEnumeratorMixin), function ConcatAllEnumerator(instance, delegate) {
        init(DisposableLike__mixin, instance);
        init(typedDisposableRefMixin, instance, DisposableLike__disposed);
        init(typedMutableEnumeratorMixin, instance);
        instance.delegate = delegate;
        pipe(instance, DisposableLike__add(delegate));
        return instance;
    }, props({
        delegate: none,
    }), {
        [SourceLike_move]() {
            const { delegate } = this;
            const innerEnumerator = MutableRefLike__get(this);
            if (DisposableLike__isDisposed(innerEnumerator) &&
                EnumeratorLike__move(delegate)) {
                const next = pipe(delegate, EnumeratorLike__getCurrent, EnumerableLike__enumerate());
                pipe(this, MutableRefLike__set(next));
            }
            while (!pipe(this, MutableRefLike__get, DisposableLike__isDisposed)) {
                const innerEnumerator = MutableRefLike__get(this);
                if (EnumeratorLike__move(innerEnumerator)) {
                    this[EnumeratorLike_current] =
                        EnumeratorLike__getCurrent(innerEnumerator);
                    break;
                }
                else if (EnumeratorLike__move(delegate)) {
                    const next = pipe(delegate, EnumeratorLike__getCurrent, EnumerableLike__enumerate());
                    pipe(this, MutableRefLike__set(next));
                }
                else {
                    pipe(this, DisposableLike__dispose());
                }
            }
        },
    })), EnumerableLike__lift, returns);
})();

export { EnumerableLike__concatAll as default };
