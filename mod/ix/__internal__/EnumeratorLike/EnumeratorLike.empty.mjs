/// <reference types="./EnumeratorLike.empty.d.ts" />
import { createInstanceFactory, mix, include, init } from '../../../__internal__/mixins.mjs';
import { pipe } from '../../../functions.mjs';
import { SourceLike_move } from '../../../ix.mjs';
import MutableEnumeratorLike__mixin from '../MutableEnumeratorLike/MutableEnumeratorLike.mixin.mjs';
import DisposableLike__dispose from '../../../util/__internal__/DisposableLike/DisposableLike.dispose.mjs';
import DisposableLike__disposableMixin from '../../../util/__internal__/DisposableLike/DisposableLike.mixin.mjs';

const EnumeratorLike__empty = /*@__PURE__*/ (() => {
    const typedMutableEnumeratorMixin = MutableEnumeratorLike__mixin();
    return createInstanceFactory(mix(include(DisposableLike__disposableMixin, typedMutableEnumeratorMixin), function EmptyEnumerator(instance) {
        init(DisposableLike__disposableMixin, instance);
        init(typedMutableEnumeratorMixin, instance);
        return instance;
    }, {}, {
        [SourceLike_move]() {
            pipe(this, DisposableLike__dispose());
        },
    }));
})();

export { EnumeratorLike__empty as default };
