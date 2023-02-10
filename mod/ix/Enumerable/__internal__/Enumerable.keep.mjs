/// <reference types="./Enumerable.keep.d.ts" />
import { createInstanceFactory, mix, include, init, props, DelegatingLike_delegate } from '../../../__internal__/mixins.mjs';
import StatefulContainer_keep from '../../../containers/StatefulContainer/__internal__/StatefulContainer.keep.mjs';
import { pipe, none, error } from '../../../functions.mjs';
import { SourceLike_move, EnumeratorLike_hasCurrent, EnumeratorLike_current } from '../../../ix.mjs';
import Disposable_delegatingMixin from '../../../util/Disposable/__internal__/Disposable.delegatingMixin.mjs';
import Disposable_dispose from '../../../util/Disposable/__internal__/Disposable.dispose.mjs';
import DelegatingEnumerator_mixin from '../../__internal__/DelegatingEnumerator/DelegatingEnumerator.mixin.mjs';
import Enumerable_liftT from './Enumerable.liftT.mjs';

const Enumerable_keep = /*@__PURE__*/ (() => {
    const typedDelegatingEnumeratorMixin = DelegatingEnumerator_mixin();
    const KeepEnumerator_predicate = Symbol("KeepEnumerator_predicate");
    return pipe(createInstanceFactory(mix(include(Disposable_delegatingMixin(), typedDelegatingEnumeratorMixin), function KeepEnumerator(instance, delegate, predicate) {
        init(Disposable_delegatingMixin(), instance, delegate);
        init(typedDelegatingEnumeratorMixin, instance, delegate);
        instance[KeepEnumerator_predicate] = predicate;
        return instance;
    }, props({ [KeepEnumerator_predicate]: none }), {
        [SourceLike_move]() {
            const { [KeepEnumerator_predicate]: predicate } = this;
            try {
                while ((this[DelegatingLike_delegate][SourceLike_move](),
                    this[DelegatingLike_delegate][EnumeratorLike_hasCurrent]) &&
                    !predicate(this[EnumeratorLike_current])) { }
            }
            catch (e) {
                pipe(this, Disposable_dispose(error(e)));
            }
        },
    })), StatefulContainer_keep(Enumerable_liftT));
})();

export { Enumerable_keep as default };
