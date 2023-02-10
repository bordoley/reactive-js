/// <reference types="./Enumerator.empty.d.ts" />
import { createInstanceFactory, mix, include, init } from '../../../__internal__/mixins.mjs';
import { pipe } from '../../../functions.mjs';
import { SourceLike_move } from '../../../ix.mjs';
import Disposable_dispose from '../../../util/Disposable/__internal__/Disposable.dispose.mjs';
import Disposable_mixin from '../../../util/Disposable/__internal__/Disposable.mixin.mjs';
import MutableEnumerator_mixin from '../../__internal__/MutableEnumerator/MutableEnumerator.mixin.mjs';

const Enumerator_empty = /*@__PURE__*/ (() => {
    const typedMutableEnumeratorMixin = MutableEnumerator_mixin();
    return createInstanceFactory(mix(include(Disposable_mixin, typedMutableEnumeratorMixin), function EmptyEnumerator(instance) {
        init(Disposable_mixin, instance);
        init(typedMutableEnumeratorMixin, instance);
        return instance;
    }, {}, {
        [SourceLike_move]() {
            pipe(this, Disposable_dispose());
        },
    }));
})();

export { Enumerator_empty as default };
