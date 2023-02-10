/// <reference types="./Enumerable.distinctUntilChanged.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import StatefulContainer_distinctUntilChanged from '../../../containers/StatefulContainer/__internal__/StatefulContainer.distinctUntilChanged.mjs';
import { pipe, none, error } from '../../../functions.mjs';
import { SourceLike_move } from '../../../ix.mjs';
import Disposable_delegatingMixin from '../../../util/Disposable/__internal__/Disposable.delegatingMixin.mjs';
import Disposable_dispose from '../../../util/Disposable/__internal__/Disposable.dispose.mjs';
import Enumerator_getCurrent from '../../Enumerator/__internal__/Enumerator.getCurrent.mjs';
import Enumerator_hasCurrent from '../../Enumerator/__internal__/Enumerator.hasCurrent.mjs';
import DelegatingEnumerator_mixin from '../../__internal__/DelegatingEnumerator/DelegatingEnumerator.mixin.mjs';
import DelegatingEnumerator_move from '../../__internal__/DelegatingEnumerator/DelegatingEnumerator.move.mjs';
import Enumerable_liftT from './Enumerable.liftT.mjs';

const Enumerable_distinctUntilChanged = 
/*@__PURE__*/ (() => {
    const typedDelegatingEnumeratorMixin = DelegatingEnumerator_mixin();
    const DistinctUntilChangedEnumerator_equality = Symbol("DistinctUntilChangedEnumerator_equality");
    return pipe(createInstanceFactory(mix(include(Disposable_delegatingMixin(), typedDelegatingEnumeratorMixin), function DistinctUntilChangedEnumerator(instance, delegate, equality) {
        init(Disposable_delegatingMixin(), instance, delegate);
        init(typedDelegatingEnumeratorMixin, instance, delegate);
        instance[DistinctUntilChangedEnumerator_equality] = equality;
        return instance;
    }, props({
        [DistinctUntilChangedEnumerator_equality]: none,
    }), {
        [SourceLike_move]() {
            const hadCurrent = Enumerator_hasCurrent(this);
            const prevCurrent = hadCurrent
                ? Enumerator_getCurrent(this)
                : none;
            try {
                while (DelegatingEnumerator_move(this)) {
                    if (!hadCurrent ||
                        !this[DistinctUntilChangedEnumerator_equality](prevCurrent, Enumerator_getCurrent(this))) {
                        break;
                    }
                }
            }
            catch (e) {
                pipe(this, Disposable_dispose(error(e)));
            }
        },
    })), StatefulContainer_distinctUntilChanged(Enumerable_liftT));
})();

export { Enumerable_distinctUntilChanged as default };
