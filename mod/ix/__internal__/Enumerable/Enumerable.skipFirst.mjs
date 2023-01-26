/// <reference types="./Enumerable.skipFirst.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import StatefulContainer$skipFirst from '../../../containers/__internal__/StatefulContainer/StatefulContainer.skipFirst.mjs';
import { pipe } from '../../../functions.mjs';
import { SourceLike_move } from '../../../ix.mjs';
import Disposable$delegatingMixin from '../../../util/__internal__/Disposable/Disposable.delegatingMixin.mjs';
import DelegatingEnumerator$mixin from '../DelegatingEnumerator/DelegatingEnumerator.mixin.mjs';
import DelegatingEnumerator$move from '../DelegatingEnumerator/DelegatingEnumerator.move.mjs';
import Enumerable$liftT from './Enumerable.liftT.mjs';

const Enumerable$skipFirst = 
/*@__PURE__*/ (() => {
    const typedDelegatingEnumeratorMixin = DelegatingEnumerator$mixin();
    return pipe(createInstanceFactory(mix(include(Disposable$delegatingMixin, typedDelegatingEnumeratorMixin), function SkipFirstEnumerator(instance, delegate, skipCount) {
        init(Disposable$delegatingMixin, instance, delegate);
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
                if (!DelegatingEnumerator$move(this)) {
                    break;
                }
            }
            this.count = skipCount;
            DelegatingEnumerator$move(this);
        },
    })), StatefulContainer$skipFirst(Enumerable$liftT));
})();

export { Enumerable$skipFirst as default };
