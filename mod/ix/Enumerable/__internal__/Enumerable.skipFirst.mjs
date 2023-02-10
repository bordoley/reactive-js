/// <reference types="./Enumerable.skipFirst.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import StatefulContainer_skipFirst from '../../../containers/StatefulContainer/__internal__/StatefulContainer.skipFirst.mjs';
import { pipe } from '../../../functions.mjs';
import { SourceLike_move } from '../../../ix.mjs';
import Disposable_delegatingMixin from '../../../util/Disposable/__internal__/Disposable.delegatingMixin.mjs';
import DelegatingEnumerator_mixin from '../../__internal__/DelegatingEnumerator/DelegatingEnumerator.mixin.mjs';
import DelegatingEnumerator_move from '../../__internal__/DelegatingEnumerator/DelegatingEnumerator.move.mjs';
import Enumerable_liftT from './Enumerable.liftT.mjs';

const Enumerable_skipFirst = 
/*@__PURE__*/ (() => {
    const typedDelegatingEnumeratorMixin = DelegatingEnumerator_mixin();
    const SkipFirstEnumerator_skipCount = Symbol("SkipFirstEnumerator_skipCount");
    const SkipFirstEnumerator_count = Symbol("SkipFirstEnumerator_count");
    return pipe(createInstanceFactory(mix(include(Disposable_delegatingMixin(), typedDelegatingEnumeratorMixin), function SkipFirstEnumerator(instance, delegate, skipCount) {
        init(Disposable_delegatingMixin(), instance, delegate);
        init(typedDelegatingEnumeratorMixin, instance, delegate);
        instance[SkipFirstEnumerator_skipCount] = skipCount;
        instance[SkipFirstEnumerator_count] = 0;
        return instance;
    }, props({
        [SkipFirstEnumerator_skipCount]: 0,
        [SkipFirstEnumerator_count]: 0,
    }), {
        [SourceLike_move]() {
            const { [SkipFirstEnumerator_skipCount]: skipCount } = this;
            for (let { [SkipFirstEnumerator_count]: count } = this; count < skipCount; count++) {
                if (!DelegatingEnumerator_move(this)) {
                    break;
                }
            }
            this[SkipFirstEnumerator_count] = skipCount;
            DelegatingEnumerator_move(this);
        },
    })), StatefulContainer_skipFirst(Enumerable_liftT));
})();

export { Enumerable_skipFirst as default };
