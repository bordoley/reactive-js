/// <reference types="./Enumerable.skipFirst.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import StatefulContainer_skipFirst from '../../../containers/__internal__/StatefulContainer/StatefulContainer.skipFirst.mjs';
import { pipe } from '../../../functions.mjs';
import { SourceLike_move } from '../../../ix.mjs';
import Disposable_delegatingMixin from '../../../util/__internal__/Disposable/Disposable.delegatingMixin.mjs';
import DelegatingEnumerator_mixin from '../DelegatingEnumerator/DelegatingEnumerator.mixin.mjs';
import DelegatingEnumerator_move from '../DelegatingEnumerator/DelegatingEnumerator.move.mjs';
import Enumerable_liftT from './Enumerable.liftT.mjs';

const Enumerable_skipFirst = 
/*@__PURE__*/ (() => {
    const typedDelegatingEnumeratorMixin = DelegatingEnumerator_mixin();
    return pipe(createInstanceFactory(mix(include(Disposable_delegatingMixin, typedDelegatingEnumeratorMixin), function SkipFirstEnumerator(instance, delegate, skipCount) {
        init(Disposable_delegatingMixin, instance, delegate);
        init(typedDelegatingEnumeratorMixin, instance, delegate);
        instance.skipCount = skipCount;
        instance.count = 0;
        return instance;
    }, props({
        skipCount: 0,
        count: 0,
    }), {
        [SourceLike_move]() {
            const { skipCount } = this;
            for (let { count } = this; count < skipCount; count++) {
                if (!DelegatingEnumerator_move(this)) {
                    break;
                }
            }
            this.count = skipCount;
            DelegatingEnumerator_move(this);
        },
    })), StatefulContainer_skipFirst(Enumerable_liftT));
})();

export { Enumerable_skipFirst as default };
