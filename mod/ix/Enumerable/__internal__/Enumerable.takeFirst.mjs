/// <reference types="./Enumerable.takeFirst.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import StatefulContainer_takeFirst from '../../../containers/StatefulContainer/__internal__/StatefulContainer.takeFirst.mjs';
import { pipe } from '../../../functions.mjs';
import { SourceLike_move } from '../../../ix.mjs';
import Disposable_delegatingMixin from '../../../util/Disposable/__internal__/Disposable.delegatingMixin.mjs';
import Disposable_dispose from '../../../util/Disposable/__internal__/Disposable.dispose.mjs';
import DelegatingEnumerator_mixin from '../../__internal__/DelegatingEnumerator/DelegatingEnumerator.mixin.mjs';
import DelegatingEnumerator_move from '../../__internal__/DelegatingEnumerator/DelegatingEnumerator.move.mjs';
import Enumerable_liftT from './Enumerable.liftT.mjs';

const Enumerable_takeFirst = 
/*@__PURE__*/ (() => {
    const typedDelegatingEnumeratorMixin = DelegatingEnumerator_mixin();
    const TakeFirstEnumerator_maxCount = Symbol("TakeFirstEnumerator_maxCount");
    const TakeFirstEnumerator_count = Symbol("TakeFirstEnumerator_count");
    return pipe(createInstanceFactory(mix(include(Disposable_delegatingMixin(), typedDelegatingEnumeratorMixin), function TakeFirstEnumerator(instance, delegate, maxCount) {
        init(Disposable_delegatingMixin(), instance, delegate);
        init(typedDelegatingEnumeratorMixin, instance, delegate);
        instance[TakeFirstEnumerator_maxCount] = maxCount;
        return instance;
    }, props({
        [TakeFirstEnumerator_maxCount]: 0,
        [TakeFirstEnumerator_count]: 0,
    }), {
        [SourceLike_move]() {
            if (this[TakeFirstEnumerator_count] <
                this[TakeFirstEnumerator_maxCount]) {
                this[TakeFirstEnumerator_count]++;
                DelegatingEnumerator_move(this);
            }
            else {
                pipe(this, Disposable_dispose());
            }
        },
    })), StatefulContainer_takeFirst(Enumerable_liftT));
})();

export { Enumerable_takeFirst as default };
