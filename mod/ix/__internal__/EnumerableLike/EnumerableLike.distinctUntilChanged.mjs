/// <reference types="./EnumerableLike.distinctUntilChanged.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import StatefulContainerLike__distinctUntilChanged from '../../../containers/__internal__/StatefulContainerLike/StatefulContainerLike.distinctUntilChanged.mjs';
import { pipe, none } from '../../../functions.mjs';
import { SourceLike_move } from '../../../ix.mjs';
import DisposableLike__delegatingMixin from '../../../util/__internal__/DisposableLike/DisposableLike.delegatingMixin.mjs';
import DisposableLike__dispose from '../../../util/__internal__/DisposableLike/DisposableLike.dispose.mjs';
import DelegatingEnumeratorLike__mixin from '../DelegatingEnumeratorLike/DelegatingEnumeratorLike.mixin.mjs';
import DelegatingEnumeratorLike__move from '../DelegatingEnumeratorLike/DelegatingEnumeratorLike.move.mjs';
import EnumeratorLike__getCurrent from '../EnumeratorLike/EnumeratorLike.getCurrent.mjs';
import EnumeratorLike__hasCurrent from '../EnumeratorLike/EnumeratorLike.hasCurrent.mjs';
import EnumerableLike__liftT from './EnumerableLike.liftT.mjs';

const EnumerableLike__distinctUntilChanged = 
/*@__PURE__*/ (() => {
    const typedDelegatingEnumeratorMixin = DelegatingEnumeratorLike__mixin();
    return pipe(createInstanceFactory(mix(include(DisposableLike__delegatingMixin, typedDelegatingEnumeratorMixin), function DistinctUntilChanged(instance, delegate, equality) {
        init(DisposableLike__delegatingMixin, instance, delegate);
        init(typedDelegatingEnumeratorMixin, instance, delegate);
        instance.equality = equality;
        return instance;
    }, props({ equality: none }), {
        [SourceLike_move]() {
            const hadCurrent = EnumeratorLike__hasCurrent(this);
            const prevCurrent = hadCurrent
                ? EnumeratorLike__getCurrent(this)
                : none;
            try {
                while (DelegatingEnumeratorLike__move(this)) {
                    if (!hadCurrent ||
                        !this.equality(prevCurrent, EnumeratorLike__getCurrent(this))) {
                        break;
                    }
                }
            }
            catch (cause) {
                pipe(this, DisposableLike__dispose({ cause }));
            }
        },
    })), StatefulContainerLike__distinctUntilChanged(EnumerableLike__liftT));
})();

export { EnumerableLike__distinctUntilChanged as default };
