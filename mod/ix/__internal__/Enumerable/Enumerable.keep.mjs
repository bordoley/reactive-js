/// <reference types="./Enumerable.keep.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import StatefulContainer_keep from '../../../containers/__internal__/StatefulContainer/StatefulContainer.keep.mjs';
import { pipe, none, error } from '../../../functions.mjs';
import { SourceLike_move } from '../../../ix.mjs';
import Disposable_delegatingMixin from '../../../util/__internal__/Disposable/Disposable.delegatingMixin.mjs';
import Disposable_dispose from '../../../util/__internal__/Disposable/Disposable.dispose.mjs';
import DelegatingEnumerator_mixin from '../DelegatingEnumerator/DelegatingEnumerator.mixin.mjs';
import DelegatingEnumerator_move from '../DelegatingEnumerator/DelegatingEnumerator.move.mjs';
import Enumerator_getCurrent from '../Enumerator/Enumerator.getCurrent.mjs';
import Enumerable_liftT from './Enumerable.liftT.mjs';

const Enumerable_keep = /*@__PURE__*/ (() => {
    const typedDelegatingEnumeratorMixin = DelegatingEnumerator_mixin();
    return pipe(createInstanceFactory(mix(include(Disposable_delegatingMixin, typedDelegatingEnumeratorMixin), function KeepEnumerator(instance, delegate, predicate) {
        init(Disposable_delegatingMixin, instance, delegate);
        init(typedDelegatingEnumeratorMixin, instance, delegate);
        instance.predicate = predicate;
        return instance;
    }, props({ predicate: none }), {
        [SourceLike_move]() {
            const { predicate } = this;
            try {
                while (DelegatingEnumerator_move(this) &&
                    !predicate(Enumerator_getCurrent(this))) { }
            }
            catch (e) {
                pipe(this, Disposable_dispose(error(e)));
            }
        },
    })), StatefulContainer_keep(Enumerable_liftT));
})();

export { Enumerable_keep as default };
