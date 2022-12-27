/// <reference types="./EnumeratorLike.empty.d.ts" />
import { mutableEnumeratorMixin } from '../../../__internal__/ix/EnumeratorLike.mutable.mjs';
import { createInstanceFactory, mixin, include, init } from '../../../__internal__/mixins.mjs';
import { pipe } from '../../../functions.mjs';
import { SourceLike_move } from '../../../ix.mjs';
import dispose from '../../../util/__internal__/DisposableLike/DisposableLike.dispose.mjs';
import disposableMixin from '../../../util/__internal__/DisposableLike/DisposableLike.mixin.mjs';

const empty = /*@__PURE__*/ (() => {
    const typedMutableEnumeratorMixin = mutableEnumeratorMixin();
    return createInstanceFactory(mixin(include(disposableMixin, typedMutableEnumeratorMixin), function EmptyEnumerator(instance) {
        init(disposableMixin, instance);
        init(typedMutableEnumeratorMixin, instance);
        return instance;
    }, {}, {
        [SourceLike_move]() {
            pipe(this, dispose());
        },
    }));
})();

export { empty as default };
