/// <reference types="./EnumerableLike.concatAll.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { disposableRefMixin } from '../../../__internal__/util/DisposableRefLike.mjs';
import { getCurrentRef, setCurrentRef } from '../../../__internal__/util/MutableRefLike.mjs';
import { pipe, none, returns } from '../../../functions.mjs';
import { SourceLike_move, EnumeratorLike_current } from '../../../ix.mjs';
import { disposed, add, isDisposed, dispose } from '../../../util/DisposableLike.mjs';
import DisposableLike__mixin from '../../../util/__internal__/DisposableLike/DisposableLike.mixin.mjs';
import { move, getCurrent } from '../../EnumeratorLike.mjs';
import MutableEnumeratorLike__mixin from '../MutableEnumeratorLike/MutableEnumeratorLike.mixin.mjs';
import EnumerableLike__enumerate from './EnumerableLike.enumerate.mjs';
import EnumerableLike__lift from './EnumerableLike.lift.mjs';

const EnumerableLike__concatAll = 
/*@__PURE__*/ (() => {
    const typedMutableEnumeratorMixin = MutableEnumeratorLike__mixin();
    const typedDisposableRefMixin = disposableRefMixin();
    return pipe(createInstanceFactory(mix(include(DisposableLike__mixin, typedDisposableRefMixin, typedMutableEnumeratorMixin), function ConcatAllEnumerator(instance, delegate) {
        init(DisposableLike__mixin, instance);
        init(typedDisposableRefMixin, instance, disposed);
        init(typedMutableEnumeratorMixin, instance);
        instance.delegate = delegate;
        pipe(instance, add(delegate));
        return instance;
    }, props({
        delegate: none,
    }), {
        [SourceLike_move]() {
            const { delegate } = this;
            const innerEnumerator = getCurrentRef(this);
            if (isDisposed(innerEnumerator) && move(delegate)) {
                const next = pipe(delegate, getCurrent, EnumerableLike__enumerate());
                pipe(this, setCurrentRef(next));
            }
            while (!pipe(this, getCurrentRef, isDisposed)) {
                const innerEnumerator = getCurrentRef(this);
                if (move(innerEnumerator)) {
                    this[EnumeratorLike_current] = getCurrent(innerEnumerator);
                    break;
                }
                else if (move(delegate)) {
                    const next = pipe(delegate, getCurrent, EnumerableLike__enumerate());
                    pipe(this, setCurrentRef(next));
                }
                else {
                    pipe(this, dispose());
                }
            }
        },
    })), EnumerableLike__lift, returns);
})();

export { EnumerableLike__concatAll as default };
