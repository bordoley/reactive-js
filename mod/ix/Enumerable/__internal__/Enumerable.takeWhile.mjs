/// <reference types="./Enumerable.takeWhile.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import StatefulContainer_takeWhile from '../../../containers/StatefulContainer/__internal__/StatefulContainer.takeWhile.mjs';
import { pipe, none, error } from '../../../functions.mjs';
import { SourceLike_move } from '../../../ix.mjs';
import Disposable_delegatingMixin from '../../../util/Disposable/__internal__/Disposable.delegatingMixin.mjs';
import Disposable_dispose from '../../../util/Disposable/__internal__/Disposable.dispose.mjs';
import Disposable_isDisposed from '../../../util/Disposable/__internal__/Disposable.isDisposed.mjs';
import Enumerator_getCurrent from '../../Enumerator/__internal__/Enumerator.getCurrent.mjs';
import DelegatingEnumerator_mixin from '../../__internal__/DelegatingEnumerator/DelegatingEnumerator.mixin.mjs';
import DelegatingEnumerator_move from '../../__internal__/DelegatingEnumerator/DelegatingEnumerator.move.mjs';
import Enumerable_liftT from './Enumerable.liftT.mjs';

const Enumerable_takeWhile = 
/*@__PURE__*/ (() => {
    const typedDelegatingEnumeratorMixin = DelegatingEnumerator_mixin();
    const TakeWhileEnumerator_predicate = Symbol("TakeWhileEnumerator_predicate");
    const TakeWhileEnumerator_inclusive = Symbol("TakeWhileEnumerator_inclusive");
    const TakeWhileEnumerator_done = Symbol("TakeWhileEnumerator_done");
    return pipe(createInstanceFactory(mix(include(Disposable_delegatingMixin(), typedDelegatingEnumeratorMixin), function TakeWhileEnumerator(instance, delegate, predicate, inclusive) {
        init(Disposable_delegatingMixin(), instance, delegate);
        init(typedDelegatingEnumeratorMixin, instance, delegate);
        instance[TakeWhileEnumerator_predicate] = predicate;
        instance[TakeWhileEnumerator_inclusive] = inclusive;
        return instance;
    }, props({
        [TakeWhileEnumerator_predicate]: none,
        [TakeWhileEnumerator_inclusive]: false,
        [TakeWhileEnumerator_done]: false,
    }), {
        [SourceLike_move]() {
            const { [TakeWhileEnumerator_inclusive]: inclusive, [TakeWhileEnumerator_predicate]: predicate, } = this;
            if (this[TakeWhileEnumerator_done] &&
                !Disposable_isDisposed(this)) {
                pipe(this, Disposable_dispose());
            }
            else if (DelegatingEnumerator_move(this)) {
                const current = Enumerator_getCurrent(this);
                try {
                    const satisfiesPredicate = predicate(current);
                    if (!satisfiesPredicate && inclusive) {
                        this[TakeWhileEnumerator_done] = true;
                    }
                    else if (!satisfiesPredicate) {
                        pipe(this, Disposable_dispose());
                    }
                }
                catch (e) {
                    pipe(this, Disposable_dispose(error(e)));
                }
            }
        },
    })), StatefulContainer_takeWhile(Enumerable_liftT));
})();

export { Enumerable_takeWhile as default };
