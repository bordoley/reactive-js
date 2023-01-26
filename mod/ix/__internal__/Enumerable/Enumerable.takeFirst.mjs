/// <reference types="./Enumerable.takeFirst.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import StatefulContainer_takeFirst from '../../../containers/__internal__/StatefulContainer/StatefulContainer.takeFirst.mjs';
import { pipe } from '../../../functions.mjs';
import { SourceLike_move } from '../../../ix.mjs';
import Disposable_delegatingMixin from '../../../util/__internal__/Disposable/Disposable.delegatingMixin.mjs';
import Disposable_dispose from '../../../util/__internal__/Disposable/Disposable.dispose.mjs';
import DelegatingEnumerator_mixin from '../DelegatingEnumerator/DelegatingEnumerator.mixin.mjs';
import DelegatingEnumerator_move from '../DelegatingEnumerator/DelegatingEnumerator.move.mjs';
import Enumerable_liftT from './Enumerable.liftT.mjs';

const Enumerable_takeFirst = 
/*@__PURE__*/ (() => {
    const typedDelegatingEnumeratorMixin = DelegatingEnumerator_mixin();
    return pipe(createInstanceFactory(mix(include(Disposable_delegatingMixin, typedDelegatingEnumeratorMixin), function TakeFirstEnumerator(instance, delegate, maxCount) {
        init(Disposable_delegatingMixin, instance, delegate);
        init(typedDelegatingEnumeratorMixin, instance, delegate);
        instance.maxCount = maxCount;
        return instance;
    }, props({
        maxCount: 0,
        count: 0,
    }), {
        [SourceLike_move]() {
            if (this.count < this.maxCount) {
                this.count++;
                DelegatingEnumerator_move(this);
            }
            else {
                pipe(this, Disposable_dispose());
            }
        },
    })), StatefulContainer_takeFirst(Enumerable_liftT));
})();

export { Enumerable_takeFirst as default };
