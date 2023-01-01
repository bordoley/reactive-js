/// <reference types="./EnumerableLike.takeLast.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import ReadonlyArrayLike__toEnumerable from '../../../containers/__internal__/ReadonlyArrayLike/ReadonlyArrayLike.toEnumerable.mjs';
import StatefulContainerLike__takeLast from '../../../containers/__internal__/StatefulContainerLike/StatefulContainerLike.takeLast.mjs';
import { pipe, getLength } from '../../../functions.mjs';
import { SourceLike_move } from '../../../ix.mjs';
import { add, isDisposed, bindTo } from '../../../util/DisposableLike.mjs';
import DisposableLike__mixin from '../../../util/__internal__/DisposableLike/DisposableLike.mixin.mjs';
import { getCurrent } from '../../EnumeratorLike.mjs';
import DelegatingEnumeratorLike__mixin from '../DelegatingEnumeratorLike/DelegatingEnumeratorLike.mixin.mjs';
import DelegatingEnumeratorLike__move from '../DelegatingEnumeratorLike/DelegatingEnumeratorLike.move.mjs';
import EnumerableLike__enumerate from './EnumerableLike.enumerate.mjs';
import EnumerableLike__liftT from './EnumerableLike.liftT.mjs';

const EnumerableLike__takeLast = 
/*@__PURE__*/ (() => {
    const typedDelegatingEnumeratorMixin = DelegatingEnumeratorLike__mixin();
    return pipe(createInstanceFactory(mix(include(DisposableLike__mixin, typedDelegatingEnumeratorMixin), function TakeLastEnumerator(instance, delegate, maxCount) {
        init(DisposableLike__mixin, instance);
        init(typedDelegatingEnumeratorMixin, instance, delegate);
        instance.maxCount = maxCount;
        instance.isStarted = false;
        pipe(instance, add(delegate));
        return instance;
    }, props({
        maxCount: 0,
        isStarted: false,
    }), {
        [SourceLike_move]() {
            if (!isDisposed(this) && !this.isStarted) {
                this.isStarted = true;
                const last = [];
                while (DelegatingEnumeratorLike__move(this)) {
                    last.push(getCurrent(this));
                    if (getLength(last) > this.maxCount) {
                        last.shift();
                    }
                }
                const enumerator = pipe(last, ReadonlyArrayLike__toEnumerable(), EnumerableLike__enumerate(), bindTo(this));
                init(typedDelegatingEnumeratorMixin, this, enumerator);
            }
            DelegatingEnumeratorLike__move(this);
        },
    })), StatefulContainerLike__takeLast(EnumerableLike__liftT));
})();

export { EnumerableLike__takeLast as default };
