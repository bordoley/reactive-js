/// <reference types="./Enumerator.empty.d.ts" />
import { createInstanceFactory, mix, include, init } from '../../../__internal__/mixins.mjs';
import { pipe } from '../../../functions.mjs';
import { SourceLike_move } from '../../../ix.mjs';
import MutableEnumerator$mixin from '../MutableEnumerator/MutableEnumerator.mixin.mjs';
import Disposable$dispose from '../../../util/__internal__/Disposable/Disposable.dispose.mjs';
import Disposable$mixin from '../../../util/__internal__/Disposable/Disposable.mixin.mjs';

const Enumerator$empty = /*@__PURE__*/ (() => {
    const typedMutableEnumeratorMixin = MutableEnumerator$mixin();
    return createInstanceFactory(mix(include(Disposable$mixin, typedMutableEnumeratorMixin), function EmptyEnumerator(instance) {
        init(Disposable$mixin, instance);
        init(typedMutableEnumeratorMixin, instance);
        return instance;
    }, {}, {
        [SourceLike_move]() {
            pipe(this, Disposable$dispose());
        },
    }));
})();

export { Enumerator$empty as default };
