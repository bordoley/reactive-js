/// <reference types="./Enumerable.forEach.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import StatefulContainer_forEach from '../../../containers/StatefulContainer/__internal__/StatefulContainer.forEach.mjs';
import { pipe, none, error } from '../../../functions.mjs';
import { SourceLike_move } from '../../../ix.mjs';
import Disposable_delegatingMixin from '../../../util/Disposable/__internal__/Disposable.delegatingMixin.mjs';
import Disposable_dispose from '../../../util/Disposable/__internal__/Disposable.dispose.mjs';
import Enumerator_getCurrent from '../../Enumerator/__internal__/Enumerator.getCurrent.mjs';
import DelegatingEnumerator_mixin from '../../__internal__/DelegatingEnumerator/DelegatingEnumerator.mixin.mjs';
import DelegatingEnumerator_move from '../../__internal__/DelegatingEnumerator/DelegatingEnumerator.move.mjs';
import Enumerable_liftT from './Enumerable.liftT.mjs';

const Enumerable_forEach = /*@__PURE__*/ (() => {
    const typedDelegatingEnumeratorMixin = DelegatingEnumerator_mixin();
    const ForEachEnumerator_effect = Symbol("ForEachEnumerator_effect");
    return pipe(createInstanceFactory(mix(include(Disposable_delegatingMixin(), typedDelegatingEnumeratorMixin), function ForEachEnumerator(instance, delegate, effect) {
        init(Disposable_delegatingMixin(), instance, delegate);
        init(typedDelegatingEnumeratorMixin, instance, delegate);
        instance[ForEachEnumerator_effect] = effect;
        return instance;
    }, props({ [ForEachEnumerator_effect]: none }), {
        [SourceLike_move]() {
            if (DelegatingEnumerator_move(this)) {
                try {
                    this[ForEachEnumerator_effect](Enumerator_getCurrent(this));
                }
                catch (e) {
                    pipe(this, Disposable_dispose(error(e)));
                }
            }
        },
    })), StatefulContainer_forEach(Enumerable_liftT));
})();

export { Enumerable_forEach as default };
